import { Doctor } from "../model/doctor";
import { Slot } from "../model/slot";

export class DoctorController {
    doctor: Doctor[] = [];

    registerDoctor(name:string, speciality:string){
        const doctor = new Doctor(name, speciality);
        this.doctor.push(doctor);
        return doctor;
    }

    declareAvailability(name: string, slot: Slot){
        const Doctor = this.doctor.find(Doctor => Doctor.name === name);
        if(Doctor){
            Doctor.declearAvailability(slot)
        }
    }

    viewAppoinments(name: string){
        const Doctor = this.doctor.find(Doctor => Doctor.name === name);
        if(Doctor){
            return Doctor.viewAppinment;
        }else {
            console.log('Doctor not Found');
            return [];
        }
    }
}