"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taskManager_1 = require("./taskManager");
const user_1 = require("./user");
const manger1 = new taskManager_1.taskManager();
const user1 = new user_1.user("manav", "manavsharma136@gmail.com");
const user2 = new user_1.user("pjs", "pj@gmail.com");
let t1 = manger1.createTask("teapro", "ppppp", new Date(), user1, user2);
console.log(manger1);
const manager2 = new taskManager_1.taskManager();
manager2.updateTask(t1.getId(), {
    title: "manav is good dev",
});
console.log("PP", manager2);
