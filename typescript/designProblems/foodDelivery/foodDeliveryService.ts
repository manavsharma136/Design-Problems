import { Customer } from "./customer";
import { DeliveryAgent } from "./deliveryAgent";
import { Order } from "./order";
import { OrderItem } from "./orderItem";
import { OrderStatus } from "./orderStatus";
import { Restaurant } from "./restaurant";

class FoodDeliveryService {


    private customers : Map<string,Customer>=new Map();
    private restaurants : Map<string,Restaurant>=new Map();
    private deliveryAgents:Map<string,DeliveryAgent>=new Map();
    private orders :Map<string,Order>=new Map();


    constructor(){
    }
    registerCustomer(customer:Customer){
        if(!this.customers.has(customer.getId())){
            this.customers.set(customer.getId(),customer);
        }
        else{
            console.log("User already exist");
        }
    }

    registerRestaurant(restaurant:Restaurant){
        if(!this.restaurants.has(restaurant.getId())){
            this.restaurants.set(restaurant.getId(),restaurant);
        }
    }

    registerDeliveryAgent(deliveryAgent:DeliveryAgent){
        if(!this.deliveryAgents.has(deliveryAgent.getId())){
            this.deliveryAgents.set(deliveryAgent.getId(),deliveryAgent);
        }
    }


    createOrder(customerId:string,restaurantId:string,orderItems:OrderItem[]){

        const customer =this.customers.get(customerId);
        const restaurant = this.restaurants.get(restaurantId);
        if(!customer && !restaurant){
            console.log("Something went wrong");
        }
        const order = new Order(customer!,restaurant!);
        
        for(let i in orderItems){
            order.addItem(orderItems[i]);
        }

        this.orders.set(order.getOrderId(),order);
        customer!.addOrder(order);
        this.notifyOrderCreated(order);
    }


    private notifyOrderCreated(order: Order): void {
                // Implementation for sending notifications to relevant parties
                console.log(`Order ${order.getOrderId()} created`);
    }

    assignDeliveryAgent(orderId: string): void {
        const order=this.orders.get(orderId);
        if(!order){
            throw new Error("Orders not found");
        }
        const availableAgent = Array.from(this.deliveryAgents.values()).find(agent => agent.isAvailable());
        if(!availableAgent){
            throw new Error("No delivery agent found");
        }
        availableAgent.assignOrder(order);
        order.assignDeliveryAgent(availableAgent);
        order.updateOrderStatus(OrderStatus.CONFIRMED);
    }


    
     

}


