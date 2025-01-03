"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const question_1 = require("./question");
const answer_1 = require("./answer");
class stackOverFlow {
    constructor() {
        this.users = [];
        this.allQuestions = [];
    }
    createUser(username, email) {
        let newUser = new user_1.user(username, email);
        this.users.push(newUser);
        return newUser;
    }
    postQuestion(title, description, author, tags) {
        let newQuestion = new question_1.question(title, description, author, tags);
        this.allQuestions.push(newQuestion);
        return newQuestion;
    }
    postAnswer(content, author, question) {
        let newAnswer = new answer_1.Answer(content, author, question);
        question.addAnswer(newAnswer);
        return newAnswer;
    }
    searchQuestionByKeyword(keyword) {
        return this.allQuestions.filter(q => {
            return (q.title.includes(keyword) || q.description.includes(keyword));
        });
    }
    getQuestionsByUser(author) {
        return this.allQuestions.filter(q => q.author.id == author.id);
    }
    getAnswersOfQuesion(question) {
        return question.getAnswers();
    }
}
exports.default = stackOverFlow;
