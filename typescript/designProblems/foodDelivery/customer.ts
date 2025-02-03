import { ILocation } from "./Ilocation";
import { user } from "./user";
import { Order } from "./order";
export class Customer extends user{

    private location:ILocation;
    private orders:Order[];
    constructor(name:string, email:string,phone:number,location:ILocation){
        super(name, email, phone);
        this.location =  location;
        this.orders = [];

    }


    addOrder(order:Order):void{
        this.orders.push(order);
    }

    getOrder(order:Order):Order[]{
        return [...this.orders];
    }

    getLocation():ILocation{
        return this.location;
    }
    
}