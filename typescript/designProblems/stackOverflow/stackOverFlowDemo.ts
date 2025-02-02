
import { question } from './question';
import stackOverFlow from './stackoverflow';


let system= new stackOverFlow();
let user1=system.createUser("manav","manavsharma136@gmail.com");
let user2=system.createUser("akash","akash@gmail.com");
let user3=system.createUser("harman","harman@gmail.com");


let question1:question=system.postQuestion("why rpc is not working properly","rpc error",user1,[]);
system.postQuestion("why blockchain is not working properly","blockchain error",user1,[]);

console.log(system.getQuestionsByUser(user1));
console.log("Next answer");
console.log(system.searchQuestionByKeyword("blockchain"));
let manav="keyword search";

system.postAnswer("becuase blockchains are shit",user3,question1);
console.log("Answers are:",system.getAnswersOfQuesion(question1));
let answers=system.getAnswersOfQuesion(question1);

// console.log("Answer are",answers[0],answers[0].idCounter="3");