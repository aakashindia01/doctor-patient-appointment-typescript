import { Appoinment } from "../model/appoinment";
import { Doctor } from "../model/doctor";
import { Patient } from "../model/patient";
import { DefaultRankingStrategy, RankingStrategy } from "../model/rankingStrattegy";
import { Slot } from "../model/slot";

export class PatientController {
    patients: Patient[] = [];
    waitlist: { [key: string]: Patient[] } = {};

    registerPaitent(name: string) {
        const paitent = new Patient(name);
        this.patients.push(paitent);
        return paitent;
    }

    searchSlots(speciality: string, doctors: Doctor[], rankingStrategy: RankingStrategy = new DefaultRankingStrategy()) {
        let appointments: Appoinment[] = [];
        doctors.filter(doc => doc.speciality=== speciality).forEach(doctor => {
            doctor.availability.forEach(slot => {
                if (!doctor.bookedAppoinments.some(app => app.slot.startTime.getTime() === slot.startTime.getTime())) {
                    appointments.push(new Appoinment(doctor, new Patient(''), slot, 'Waitinglist'));
                }
            });
        });
        return rankingStrategy.rank(appointments);
    }

    bookAppointment(patientName: string, doctorName: string, slot: Slot, doctors: Doctor[]) {
        const patient = this.patients.find(pat => pat.name === patientName);
        const doctor = doctors.find(doc => doc.name === doctorName);

        if (patient && doctor) {
            const existingAppointment = doctor.bookedAppoinments.find(app => app.slot.startTime.getTime() === slot.startTime.getTime());

            if (existingAppointment) {
                console.log('Slot already booked. Adding to waitlist.');
                if (!this.waitlist[doctor.name]) {
                    this.waitlist[doctor.name] = [];
                }
                this.waitlist[doctor.name].push(patient);
            } else {
                const appointment = new Appoinment(doctor, patient, slot, 'Booked');
                doctor.bookedAppoinments.push(appointment);
                patient.bookedAppointments.push(appointment);
            }
        } else {
            console.log('Patient or Doctor not found.');
        }
    }

    cancelAppointment(patientName: string, doctorName: string, slot: Slot, doctors: Doctor[]) {
        const patient = this.patients.find(pat => pat.name === patientName);
        const doctor = doctors.find(doc => doc.name === doctorName);

        if (patient && doctor) {
            const appointmentIndex = doctor.bookedAppoinments.findIndex(app => app.slot.startTime.getTime() === slot.startTime.getTime() && app.patient?.name === patientName);

            if (appointmentIndex !== -1) {
                doctor.bookedAppoinments.splice(appointmentIndex, 1);
                patient.bookedAppointments = patient.bookedAppointments.filter(app => app.slot.startTime.getTime() !== slot.startTime.getTime());
                console.log('Appointment cancelled.');

                if (this.waitlist[doctor.name] && this.waitlist[doctor.name].length > 0) {
                    const nextPatient = this.waitlist[doctor.name].shift();
                    if (nextPatient) {
                        const newAppointment = new Appoinment(doctor, nextPatient, slot, 'Waitinglist');
                        doctor.bookedAppoinments.push(newAppointment);
                        nextPatient.bookedAppointments.push(newAppointment);
                        console.log('Next patient in waitlist booked.');
                    }
                }
            } else {
                console.log('Appointment not found.');
            }
        } else {
            console.log('Patient or Doctor not found.');
        }
    }

    viewAppointments(patientName: string) {
        const patient = this.patients.find(pat => pat.name === patientName);
        if (patient) {
            return patient.viewAppoinments();
        } else {
            console.log('Patient not found.');
            return [];
        }
    }
}