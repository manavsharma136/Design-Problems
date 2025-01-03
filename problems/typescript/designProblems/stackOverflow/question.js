"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.question = void 0;
class question {
    constructor(title, description, author, tags) {
        this.questionId = question.counter++;
        this.title = title;
        this.description = description;
        this.author = author;
        this.tags = tags;
        this.creationDate = new Date();
        this.answer = [];
        this.comments = [];
        this.tags = [];
        this.votes = 0;
    }
    upVotes() {
        this.votes++;
        this.author.addReputation(10);
    }
    downVote() {
        this.votes--;
        this.author.addReputation(-2);
    }
    addAnswer(answer) {
        this.answer.push(answer);
    }
    addComment(comment) {
        this.comments.push(comment);
    }
    getAnswers() {
        return this.answer;
    }
}
exports.question = question;
question.counter = 1;
