import { user } from "./user";
import { question } from "./question";
import { Answer } from "./answer";
class stackOverFlow{


    private users:user[];
    private allQuestions:question[];

    constructor(){
        this.users = [];
        this.allQuestions = [];
    }
    
    public createUser(username:string,email:string):user{
        let newUser=new user(username,email);
        this.users.push(newUser);
        return newUser;
    }

    public postQuestion(title:string,description:string,author:user,tags:tag[]):question{
        let newQuestion=new question(title,description,author,tags);
        this.allQuestions.push(newQuestion);
        return newQuestion;
    }


    public postAnswer(content:string,author:user,question:question):Answer{
        let newAnswer = new Answer(content,author,question);
        question.addAnswer(newAnswer);
        return newAnswer;
    }

    public searchQuestionByKeyword(keyword:string):question[]{
       return this.allQuestions.filter(q=>{
           return (q.title.includes(keyword) || q.description.includes(keyword))
        });
    }

    public getQuestionsByUser(author:user){
        return this.allQuestions.filter(q=>q.author.id==author.id);
    }

    public getAnswersOfQuesion(question:question):Answer[]{
        return question.getAnswers();
    }



}

export default stackOverFlow;