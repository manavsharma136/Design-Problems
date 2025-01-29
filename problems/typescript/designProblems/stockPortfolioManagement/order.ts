export enum OrderStatus{
    PENDING="PENDING",
    CANCELLED="CANCELLED",
    FILLED="FILLED",
    REJECTED="REJECTED"
}
import {Account} from "./account"
import {Stock} from "./stock";
export abstract class Order{


    private readonly orderId:string;
    private readonly account:Account;
    private readonly stock:Stock;
    private status:OrderStatus;
    private quantity:number;
    private price:number;
    private createdAt:Date;
    private updatedAt:Date;

    constructor(orderId:string, account:Account, stock:Stock,quantity:number, price:number){
        this.orderId = orderId;
        this.account = account;
        this.stock = stock;
        this.quantity = quantity;
        this.price = price;
        this.status=OrderStatus.PENDING;
        this.createdAt = new Date();
        this.updatedAt = new Date();

    }

    public getOrderId():string{
        return this.orderId;
    }
    public getAccount():Account{
        return this.account;
    }
    public setStatus(orderStatus:OrderStatus):void{
        this.status=orderStatus;
        this.updatedAt = new Date();
    }
    public getTotalValue(): number {
        return this.quantity * this.price;
    }
    public getStock():Stock{
        return this.stock;
    }
    public getQuantity():number{
        return this.quantity;
    }
    public getPrice():number{
        return this.price;
    }
    public abstract execute(): void;






}