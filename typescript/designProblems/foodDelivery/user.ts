export abstract class user{
    private name:string;
    private email:string;
    private phone:number;
    constructor(name:string, email:string,phone:number){
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    public getName():string{
        return this.name;
    }
    public getEmail():string{
       return this.email;
    }
    public getPhone():number{
        return this.phone;
    }

}