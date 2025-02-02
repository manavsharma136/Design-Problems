export class User{
    private readonly Id:number;
    private static counter=1;
    private name :string;
    private email:string;
    
    constructor(name:string,email:string){
        this.name = name;
        this.Id=User.counter++;
        this.email = email;
    }


}