"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Answer = void 0;
class Answer {
    constructor(content, author, question) {
        this.id = Answer.idCounter++;
        this.content = content;
        this.author = author;
        this.associatedQuestion = question;
        this.comments = [];
        this.votes = 0;
        this.creationDate = new Date();
    }
    upvote() {
        this.votes++;
        this.author.addReputation(5); // Increase author reputation on upvote
    }
    downVote() {
        this.votes--;
        this.author.addReputation(-1);
    }
    addComment(C) {
        this.comments.push(C);
    }
}
exports.Answer = Answer;
Answer.idCounter = 1;
