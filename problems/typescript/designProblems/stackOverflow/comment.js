"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comment = void 0;
class comment {
    constructor(content, author) {
        this.id = comment.idCounter++;
        this.content = content;
        this.author = author;
        this.creationDate = new Date();
    }
}
exports.comment = comment;
// Add your class implementation here
comment.idCounter = 1;
