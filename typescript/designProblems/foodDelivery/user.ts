export abstract class user{
    private name:string;
    private email:string;
    private phone:number;
    private id:string;
    constructor(name:string, email:string,phone:number){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.id=this.generateID();
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

    public getId():string{
        return this.id;
    }
    private generateID():string{
        return (new Date()).getMilliseconds().toString();
    }
}