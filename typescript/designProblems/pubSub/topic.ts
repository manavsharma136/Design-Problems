import { Subscriber } from "./subscriber";
export class Topic {

    
    private name: string;
    private subscribers:Set<Subscriber> = new Set();
    constructor(name:string){
        this.name = name;
    }

    
    addSubscriber(subscriber:Subscriber){
        this.subscribers.add(subscriber);
    }

    removeSubscriber(subscriber:Subscriber){
        this.subscribers.delete(subscriber);
    }

    publishMessage(message:string):void{
        this.subscribers.forEach(subsciber=>subsciber.recieveMessage(message));
    }



}