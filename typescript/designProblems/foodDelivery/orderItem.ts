import { MenuItem } from "./menuItem";
export class OrderItem {

    constructor(private menuItem: MenuItem,private  quantity: number){
        this.menuItem=menuItem;
        this.quantity=quantity;
    }
    getTotalPrice():number{
        return this.menuItem.getPrice()*this.quantity;
    }

    getMenuItem():MenuItem{
        return this.menuItem
    }
}