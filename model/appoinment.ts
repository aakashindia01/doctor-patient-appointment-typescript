import { Doctor } from "./doctor";
import { Patient } from "./patient";
import { Slot } from "./slot";

export class Appoinment {
    doctor: Doctor;
    patient: Patient | null;
    slot: Slot;
    status: 'Booked' | 'Waitinglist';

    constructor(doctor: Doctor, paitent:Patient, slot:Slot, status:'Booked'| 'Waitinglist'){
        this.doctor = doctor;
        this.patient = paitent;
        this.slot = slot;
        this.status = status;
    }
}