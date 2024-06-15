import { Appoinment } from "./appoinment";

export class Patient {
    name: string;
    bookedAppointments: Appoinment[] = [];
    constructor(name: string){
        this.name = name;
    }

    viewAppoinments(){
        return this.bookedAppointments;
    }
}