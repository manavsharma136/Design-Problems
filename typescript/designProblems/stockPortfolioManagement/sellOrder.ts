import { Account } from "./account";
import { Order } from "./order";
import { Stock } from "./stock";
import { OrderStatus } from "./order";
import { Portfolio } from "./portfolio";
import { OrderType, stockBroker } from "./stockBroker";

export class sellOrder extends Order {

    constructor(orderId:string,account:Account,stock:Stock,quantity:number,price:number){
        super(orderId,account,stock,quantity,price);
    }

     public  execute(): void {
        let account=this.getAccount();
        let totalCost=this.getTotalValue();
        if(totalCost<=account.getBalance()){

            account.addBalance(totalCost);
            // remove stocks to portfolio
            stockBroker.getInstance().updatePortfolio(account,this.getStock(),this.getQuantity(),this.getPrice(),OrderType.SELL);
            this.setStatus(OrderStatus.FILLED);
            console.log("SELL ORDER CONF");
        }else{
            this.setStatus(OrderStatus.REJECTED);
            console.log("BUy order confirmed");
        }
        return;
    }




}




// import { Order, OrderStatus } from './Order';
// import { Account } from './Account';
// import { Stock } from './Stock';
// import { Portfolio } from './Portfolio';

// export class SellOrder extends Order {
//     constructor(
//         orderId: string,
//         account: Account,
//         stock: Stock,
//         quantity: number,
//         price: number
//     ) {
//         super(orderId, account, stock, price, quantity);
//     }

//     public async execute(): Promise<void> {
//         try {
//             // Get portfolio and validate holdings
//             const portfolio = await this.getPortfolio();
//             await this.validateStockHoldings(portfolio);

//             // Calculate sale proceeds
//             const totalProceeds = this.getTotalValue();

//             // Process the sale
//             await this.processSale(portfolio, totalProceeds);

//             this.setStatus(OrderStatus.FILLED);
//         } catch (error) {
//             this.setStatus(OrderStatus.REJECTED);
//             throw new Error(`Sell order failed: ${error.message}`);
//         }
//     }

//     private async getPortfolio(): Promise<Portfolio> {
//         // In a real application, this would fetch from a database
//         // This is a simplified version
//         const account = this.getAccount();
//         return new Portfolio(account);
//     }

//     private async validateStockHoldings(portfolio: Portfolio): Promise<void> {
//         const stock = this.getStock();
//         const quantityToSell = this.getQuantity();
//         const holding = portfolio.getHolding(stock);

//         if (!holding) {
//             throw new Error(`No holdings found for stock ${stock.symbol}`);
//         }

//         if (holding.quantity < quantityToSell) {
//             throw new Error(
//                 `Insufficient shares for sale. Required: ${quantityToSell}, Available: ${holding.quantity}`
//             );
//         }
//     }

//     private async processSale(portfolio: Portfolio, proceeds: number): Promise<void> {
//         try {
//             // First reduce the holdings in portfolio
//             portfolio.reduceHolding(
//                 this.getStock(),
//                 this.getQuantity()
//             );

//             // Then credit the account with sale proceeds
//             const account = portfolio.getAccount();
//             await account.addBalance(proceeds);

//             // Save the updated portfolio
//             await this.savePortfolio(portfolio);
//         } catch (error) {
//             // If any part fails, throw error for rollback
//             throw new Error(`Failed to process sale: ${error.message}`);
//         }
//     }

//     private async savePortfolio(portfolio: Portfolio): Promise<void> {
//         // In a real application, this would save to a database
//         // For now, we'll just log
//         console.log('Portfolio updated after sell order:', {
//             account: portfolio.getAccount().getId(),
//             holdings: portfolio.getAllHoldings(),
//             orderId: this.getOrderId()
//         });
//     }

//     // Helper method to log the transaction
//     private async logTransaction(portfolio: Portfolio): Promise<void> {
//         const stock = this.getStock();
//         const quantity = this.getQuantity();
//         const price = this.getPrice();
//         const totalValue = this.getTotalValue();

//         console.log('Sell Order Transaction:', {
//             orderId: this.getOrderId(),
//             accountId: portfolio.getAccount().getId(),
//             stock: stock.symbol,
//             quantity: quantity,
//             price: price,
//             totalValue: totalValue,
//             timestamp: new Date()
//         });
//     }
// }
