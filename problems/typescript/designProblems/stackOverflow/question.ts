import { Answer } from "./answer";
import { user } from "./user";
import { comment } from "./comment";
export class question{

    private static counter=1;
    public questionId:number;
    public title:string;
    public description:string;
    public author:user;
    public answer:Answer[];
    public comments:comment[];
    public tags:tag[];
    public votes:number;
    public creationDate:Date;

    constructor(title:string,description:string,author:user,tags:tag[]){
        this.questionId = question.counter++;
        this.title = title;
        this.description = description;
        this.author = author;
        this.tags = tags;
        this.creationDate = new Date();
        this.answer=[];
        this.comments=[];
        this.tags = [];
        this.votes=0;

    }

    upVotes(){
       this.votes++; 
       this.author.addReputation(10);
    }

    downVote(){
        this.votes--;
        this.author.addReputation(-2);

    }

    addAnswer(answer:Answer){
        this.answer.push(answer);
    }

    addComment(comment:comment){
        this.comments.push(comment);
    }
    getAnswers():Answer[]{
        return this.answer;
    }


}