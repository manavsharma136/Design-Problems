import { Account } from "./account";
import { Order } from "./order";
import { Portfolio } from "./portfolio";
import { Stock } from "./stock";
import { User } from "./user";
export enum OrderType {
    BUY = 'BUY',
    SELL = 'SELL'
}

export class stockBroker {
    private accounts!:Map<string,Account>;
    private stocks!:Map<string,Stock>;
    private orderQueue!:Order[];
    private static  totalAccounts=0;
    private static  totalStocks=0;
    private static instance:stockBroker;

    constructor(){
        if(stockBroker.instance){
            return stockBroker.instance
        }
        this.accounts=new Map<string,Account>();
        this.stocks=new Map<string,Stock>();
        this.orderQueue=[];
        stockBroker.instance=this;
    }
    public static getInstance():stockBroker{
        if(!stockBroker.instance){
            stockBroker.instance=new stockBroker();
        }
        return stockBroker.instance;
    }



    public createAccount(user:User):Account{
            const account = new Account(user);
            this.accounts.set(account.getAccountId(),account);
            return account;
    }
    public addStock(stock:Stock){
        this.stocks.set(stock.getSymbol(),stock);
    }
    // public getSymbol()
    public depositAccount(accountId:string,amount:number):boolean{

       let accountDetails=this.accounts.get(accountId);
        accountDetails?.addBalance(amount);
        return true;
    }
    public withdrawFromAccount(accountId:string,amount:number):string{
        let accountDetails=this.accounts.get(accountId);
        return accountDetails?.withdrawBalance(amount)!;
    }

    public placeOrder(order:Order){
        this.orderQueue.push(order);
        this.processOrders();
    }
    public getStocks(ticker:string){
        return this.stocks.get(ticker);
    }

    public getAccount(accountId:string){
        return this.accounts.get(accountId);
    }

    private processOrders(){
        while(this.orderQueue.length>0){
            const order=this.orderQueue.shift();
            if(order){
                order.execute();
            }
        }
        console.log("All order processed");
    }

    public updatePortfolio(account:Account,stock:Stock,quantity:number,price:number,orderType:OrderType){
        const portfolio=account.getPortfolio();
        if (orderType === OrderType.BUY) {
            portfolio.addHolding(stock, quantity, price);
        } else {
            portfolio.reduceHoldings(stock, quantity, price);
        }

    }
    public getStockHolding(accountId:string,stock:Stock):any{
        return this.accounts.get(accountId)?.getPortfolio()?.getCurrentHolding(stock)!;
    }
    
}