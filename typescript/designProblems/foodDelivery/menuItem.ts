export class MenuItem{
    private id:string;
    private title:string;
    private description:string;
    private price:number;

    public constructor(id:string, title:string, description:string,price:number){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
    }

    public getId(){
        return this.id;
    }
    public getPrice(){
        return this.price;
    }

}