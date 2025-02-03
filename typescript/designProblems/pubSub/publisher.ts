import { Ipublisher } from "./Ipublisher";
import { Topic } from "./topic";

export class Publisher implements Ipublisher{
    constructor(private name:string){
        this.name = name;
    }
    publishMessage(topic:Topic,message: string): void {
        topic.publishMessage(message);
    }
}