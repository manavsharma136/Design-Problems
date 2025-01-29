import { Account } from "./account";
import { Stock } from "./stock";

export interface stockHolding{
    symbol: string;
    quantity: number;
    averagePrice: number;
}

export class Portfolio {

    private holdings :Map<string,stockHolding>;

    
    constructor(account:Account){
        this.holdings=new Map<string,stockHolding>();
    }

    public addHolding(stock:Stock,quantity:number,price:number){
        if(quantity<=0) throw new Error("Invalid quantity");
        if(price<=0) throw new Error("Invalid price");
        const symbol=stock.getSymbol();

        if(this.holdings.has(symbol)){
                let holding=this.holdings.get(symbol);
                const totalShares=holding?.quantity!+quantity;
                const totalCost= (holding?.quantity!*holding?.averagePrice!)+(quantity*price); 
                const averagePrice=totalCost/totalShares;
                this.holdings.set(symbol,{symbol,quantity:totalShares,averagePrice});
        }
        else{
            this.holdings.set(symbol,{symbol,quantity,averagePrice:price});
        }   


    }

    public reduceHoldings (stock:Stock,quantity:number,price:number){
        const symbol=stock.getSymbol();
        let existingHolding = this.holdings.get(symbol);
        if(!existingHolding) throw new Error("Holding doesn't exists");
        
        if(quantity>existingHolding.quantity){
            throw new Error("Not enough quantity");
        }
        let remainingQuantity=existingHolding.quantity-quantity;
        if(remainingQuantity>0){
            this.holdings.set(symbol,{
                ...existingHolding,
                quantity:remainingQuantity
            });
        }else{
            this.holdings.delete(symbol);
        }
    }

    public getCurrentHolding(stock:Stock){
        return this.holdings.get(stock.getSymbol());
    }

}