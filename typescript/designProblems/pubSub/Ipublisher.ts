import { Topic } from "./topic";

export interface Ipublisher {
    publishMessage(topic:Topic,message:string):void;
}