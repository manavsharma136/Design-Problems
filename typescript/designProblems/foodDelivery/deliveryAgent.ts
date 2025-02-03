import { ILocation } from "./Ilocation";
import { Order } from "./order";
import { user } from "./user";
export class DeliveryAgent extends user{

    private available: boolean = false;
    private currentLocation:ILocation;
    private currentOrder:Order | null = null;


    constructor(name:string, email:string,phone:number,location:ILocation){
        super(name,email,phone);
        this.available = false;
        this.currentLocation=location;
    }


    isAvailable():boolean{
        return this.available;
    }


    setAvailable(available:boolean){
        this.available=available;
    }

    assignOrder(order:Order){
        this.currentOrder=order;
    }
    completeOrder(order:Order):void{
        this.currentOrder=null;
        this.available=true;
    }
    updateLocation(location:ILocation):void{
        this.currentLocation=location;
    }




    // constructor(user:)
}

