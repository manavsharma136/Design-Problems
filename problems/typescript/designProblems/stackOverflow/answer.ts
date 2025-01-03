import {user} from './user';
import { question } from './question';
import { comment } from './comment';
export class  Answer{

    private static idCounter = 1;
    public readonly id: number;
    public content: string;
    public author: user;
    public associatedQuestion: question;
    public comments: comment[];
    public votes: number;
    public creationDate: Date;
    constructor(content:string,author:user,question: question){
        this.id = Answer.idCounter++;
        this.content = content;
        this.author = author;
        this.associatedQuestion = question;
        this.comments = [];
        this.votes = 0;
        this.creationDate = new Date();
    
    }
    upvote(): void {
        this.votes++;
        this.author.addReputation(5); // Increase author reputation on upvote
    }

    downVote():void {
        this.votes--;
        this.author.addReputation(-1);
    }

    addComment(C: comment): void {
        this.comments.push(C);
    }
    
  

}