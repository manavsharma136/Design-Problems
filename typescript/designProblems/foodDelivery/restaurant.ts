import { MenuItem } from "./menuItem";

export class Restaurant {
    private id:string;
    private name:string;
    private location:string;
    private menu:MenuItem[];
    private isOPen:boolean;
    constructor(id:string, name:string, location:string){
        this.name = name;
        this.location = location;
        this.id = this.generateRandomId();
        this.isOPen=true;
    }

    generateRandomId(){
        return (new Date()).toString();
    }


    public addMenuItem(item:MenuItem){
        this.menu.push(item);
    }
    public removeMenuItem(itemId:String){
       this.menu= this.menu.filter(element=>element.getId()==itemId);
    }

    getMenu():MenuItem[]{
        return [...this.menu];

    }

    setOpen(isOpen:boolean){
        this.isOPen = isOpen;
    }



}

