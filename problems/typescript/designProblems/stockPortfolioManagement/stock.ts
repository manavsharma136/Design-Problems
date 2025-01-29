export class Stock{
    
    private name:string;
    private ticker:string;
    private price:number;
    
    constructor(name:string,ticker:string,listingPrice:number){
        this.name = name;
        this.ticker = ticker;
        this.price = listingPrice;
    }
    
    updateStockPrice(currentPrice:number){
        this.price = currentPrice;
    }

    getSymbol(){
        return this.ticker;
    }


}