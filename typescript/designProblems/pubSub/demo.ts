import { Topic } from "./topic";
import { Subscriber } from "./subscriber";
import { Publisher } from "./publisher";
const topic1=new Topic("getLtp");
const topic2=new Topic("getKlineData");
const topic3=new Topic("getLast10Trades");

const publisher1=new Publisher("jobs");
const subsciber1=new Subscriber("127.10.16");
const subsciber2=new Subscriber("127.10.20");
const subsciber3=new Subscriber("127.10.21");

const subsciber4=new Subscriber("127.10.22");

topic1.addSubscriber(subsciber1);
topic1.addSubscriber(subsciber2);

topic2.addSubscriber(subsciber3);
topic2.addSubscriber(subsciber1);
topic3.addSubscriber(subsciber4);


publisher1.publishMessage(topic1,"Hi here is your ltp 0.06$");
topic1.removeSubscriber(subsciber1);
console.log("After removal");
publisher1.publishMessage(topic1,"Hi here is your ltp 0.06$");

