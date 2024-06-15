import { Appoinment } from "./appoinment";

export interface RankingStrategy {
    rank(appoinment: Appoinment[]): Appoinment[]
}                                                                                                                                                                                   

export class DefaultRankingStrategy implements RankingStrategy {
    rank(appoinment: Appoinment[]){
        return appoinment.sort((a,b)=> a.slot.startTime.getTime() - b.slot.startTime.getTime())
    }
}