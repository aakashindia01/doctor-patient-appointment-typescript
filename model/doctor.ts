import { Appoinment } from "./appoinment";
import { Slot } from "./slot";

export class Doctor {
    name: string;
    speciality: string;
    availability: Slot[] = [];
    ratings: number[] = [];
    bookedAppoinments: Appoinment[] = [];

    constructor(name: string, speciality: string ){
        this.name = name;
        this.speciality = speciality;
    }

    declearAvailability(slot: any){
        if(!this.availability.some((s: any) => s.startTime === slot.startTime)){
            this.availability.push(slot);
        }else{
            console.log('Slot all ready decleared');
        }
    }

    viewAppinment(){
        return this.bookedAppoinments;
    }
}

