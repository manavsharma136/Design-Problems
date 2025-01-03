"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
class user {
    constructor(userName, email) {
        this.id = user.counter++;
        this.userName = userName;
        this.email = email;
        this.reputation = 0;
    }
    addReputation(points) {
        this.reputation += points;
    }
}
exports.user = user;
user.counter = 1;
