import { Account } from "./account";
import { Order } from "./order";
import { Stock } from "./stock";
import { OrderStatus } from "./order";
import { OrderType, stockBroker } from "./stockBroker";
export class buyOrder extends Order {

    constructor(orderId:string,account:Account,stock:Stock,quantity:number,price:number){
        super(orderId,account,stock,quantity,price);
    }

     public  execute(): void {
        let account=this.getAccount();
        let totalCost=this.getTotalValue();
        if(totalCost<=account.getBalance()){
            account.withdrawBalance(totalCost);
            // add stocks to portfolio
            console.log('ORDER PLACED')

            stockBroker.getInstance().updatePortfolio(account,this.getStock(),this.getQuantity(),this.getPrice(),OrderType.BUY);
            this.setStatus(OrderStatus.FILLED);
        }else{
            console.log('ORDER NOT PLACED')
            this.setStatus(OrderStatus.REJECTED);
        }
        return;
    }




}