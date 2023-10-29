import { Trip } from "./Trip";
import { User } from "./user";

export class Order {

    constructor(public orderId:number,public  user:User,public dateOrder:Date,public trip:Trip,public numSeats:number ) {
      
    }
}

