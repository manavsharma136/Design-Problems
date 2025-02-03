import { OrderStatus } from "./orderStatus";
import { DeliveryAgent } from "./deliveryAgent";
import { Customer } from "./customer";
import { Restaurant } from "./restaurant";
import { MenuItem } from "./menuItem";
import { OrderItem } from "./orderItem";
export class Order{
    private orderId: string;
    private status:OrderStatus;
    private deliveryAgent:DeliveryAgent | null = null;
    private customer :Customer
    private restaurant :Restaurant;
    private items:OrderItem[] = [];
    private updatedAt:Date;

    constructor( customer:Customer, restaurant:Restaurant) {
        this.orderId = this.generateOrderId();
        this.status = OrderStatus.PENDING;
        this.customer = customer;
        this.restaurant = restaurant;
        this.updatedAt=new Date();
    }


    private generateOrderId():string{
        return (new Date()).toString();
    }

    getOrderId():string{
        return this.orderId;
    }
    addItem (item:OrderItem):void {
        this.items.push(item);
        this.updateAt()
    }
    removeItem(menuItem:string):void {
        this.items=this.items.filter(item=>item.getMenuItem().getId()!==menuItem);
        this.updateAt();
    }

    getTotalPrice():number {
        return this.items.reduce((totalPrice,item)=>totalPrice+item.getTotalPrice(),0);
    }

    assignDeliveryAgent(agent:DeliveryAgent):void{
        this.deliveryAgent=agent;
        this.updateAt();
    }


    updateOrderStatus(orderStatus:OrderStatus):void{
        this.status=orderStatus;
    }


    private updateAt(){
        this.updatedAt=new Date();
    }

    getOrderStatus():OrderStatus{
        return this.status;
    }

}