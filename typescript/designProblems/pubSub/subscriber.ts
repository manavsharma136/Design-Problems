import { Isubscriber } from "./Isubscriber";

export class Subscriber implements Isubscriber{

    constructor(private name:string){
        this.name = name;
    }
    recieveMessage(message:string):void {
        console.log('Message received', message);
    }
}