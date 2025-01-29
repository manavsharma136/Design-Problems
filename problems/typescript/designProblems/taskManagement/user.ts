export class user{

    private name: string;
    private email: string;
    private static idCounter = 1;
    public readonly id: string;
    constructor(name:string, email:string){
        this.name=name;
        this.email=email;
        this.id=this.generateID();
    }

    public getId(){
        return this.id;
    }
    public getName(){
        return this.name;
    }
    public getEmail(){
        return this.email;
    }
    public setEmail(email:string){
        this.email=email;
    }
    public setName(name:string){
        this.name=name;
    }
    private generateID():string{
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let length=5;
        let totalCharLenght=characters.length;
        for(let i=0;i<length;i++){
            result+=characters[Math.floor(Math.random()*totalCharLenght)];
        }
        return result;
    }
}
// 806000