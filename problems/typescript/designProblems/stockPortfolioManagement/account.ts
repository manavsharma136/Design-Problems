import { Portfolio } from "./portfolio";
import { User } from "./user";
export class Account{

    private readonly accountId: string;
    private balance: number=0;
    private marginBalance: number=0;
    private user: User;
    private portfolio:Portfolio;
    constructor( user:User){
        this.user = user;
        this.accountId = this.generateRandomString();
        this.portfolio=new Portfolio(this);
    }

    generateRandomString():string{

        let input="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        let length=6;
        let output="";
        while(length-->0){
            output+=input[Math.floor(Math.random()*input.length)];
        }
        return output;

    }

    addBalance(amount:number){
        this.balance+=amount;
    }
    withdrawBalance(amount:number):string{
        if(amount>this.balance){return "Not enough funds to withdraw";}
        this.balance-=amount;
        return "successfully withdraw";
    }
    getBalance():number{
        return this.balance;
    }
    getAccountId():string{
        return this.accountId;
    }
    getPortfolio():Portfolio{
        return this.portfolio;
    }

}