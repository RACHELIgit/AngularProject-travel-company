import { TypeTrip } from "./TypeTrip";

export class Trip {

    constructor(public tripYaad:string,public tripType:TypeTrip,public date:Date,public numHours:number,public numChair:number,public price:number,public pic:string,public paramedik:boolean ) {
      
    }
}
