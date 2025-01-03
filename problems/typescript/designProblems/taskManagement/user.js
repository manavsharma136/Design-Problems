"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.id = this.generateID();
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    setName(name) {
        this.name = name;
    }
    generateID() {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let length = 5;
        let totalCharLenght = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters[Math.floor(Math.random() * totalCharLenght)];
        }
        return result;
    }
}
exports.user = user;
user.idCounter = 1;
// 806000
