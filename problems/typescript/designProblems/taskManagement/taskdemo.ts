import { taskManager } from "./taskManager"
import { user } from "./user";
const manger1=new taskManager();

const user1=new user("manav","manavsharma136@gmail.com");
const user2=new user("pjs","pj@gmail.com");

let t1=manger1.createTask("teapro","ppppp",new Date(),user1,user2);
console.log(manger1);
const manager2=new taskManager();

manager2.updateTask(t1.getId(),{
    title: "manav is good dev",});

console.log("PP",manager2);