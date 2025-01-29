import { Account } from "./account";
import { buyOrder } from "./buyOrder";
import { Portfolio } from "./portfolio";
import { Stock } from "./stock";
import { stockBroker } from "./stockBroker";
import { User } from "./user";



let ITC_STOCK=new Stock("ITC PVT","ITC",5);

let ZOMATO_STOCK=new Stock("zomato pvt ltd","ZOMATO",50);

let ADANI_STOCK=new Stock("ADANI pvt ltd","ADANI",500);


let user1=new User("manavsharma","manavsharma136@gmail.com");
let user2=new User("navsharma","manavsharma13@gmail.com");
let user3=new User("vamansharma","manavsharma1@gmail.com");


let stockBrokerBinanc=new stockBroker();
let account1=stockBrokerBinanc.createAccount(user1);
let account2=stockBrokerBinanc.createAccount(user2);
let account3=stockBrokerBinanc.createAccount(user3);

console.log("Acc1",stockBrokerBinanc.createAccount(user1));
console.log("Acc2",stockBrokerBinanc.createAccount(user2));
console.log("Acc3",stockBrokerBinanc.createAccount(user3));
stockBrokerBinanc.depositAccount(account1?.getAccountId(),100000);
stockBrokerBinanc.addStock(ITC_STOCK);
stockBrokerBinanc.addStock(ZOMATO_STOCK);
stockBrokerBinanc.addStock(ADANI_STOCK);
console.log(stockBrokerBinanc.getStocks("ITC"));
console.log(stockBrokerBinanc.getAccount("ITC"));



const order1=new buyOrder("123",account1,ITC_STOCK,2000,5)
stockBrokerBinanc.placeOrder(order1);
console.log(account1);
console.log(order1);

console.log(stockBrokerBinanc.getStockHolding(account1?.getAccountId(),ITC_STOCK));

