export class user{
    private static counter=1;
    public  id:number;
    public userName:string;
    public email:string;
    public reputation:number;
    
    constructor(userName:string,email:string){
        this.id=user.counter++;
        this.userName=userName;
        this.email=email;
        this.reputation=0;
    }

    addReputation(points:number){
        this.reputation+=points;
    }
    

}