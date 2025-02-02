import { task } from "./task";
import { user } from "./user";
import { TaskStatus } from "./task";

type Updates=Partial<{
    title:string,
    description:string,
    dueDate:Date,
    taskStatus:TaskStatus,
    assignedTo?: user | null;

}>
export class taskManager {

    private static instance:taskManager;

    private readonly tasks!: Map<string, task>;
    private readonly userTasks!: Map<string, task[]>;

    constructor(){
        if(taskManager.instance){
            return taskManager.instance;
        }
        this.tasks = new Map<string, task>();
        this.userTasks = new Map<string, task[]>();
        taskManager.instance=this;
    
    }

    public static getInstance():taskManager{
        if(!taskManager.instance){
            taskManager.instance=new taskManager();
        }
        return taskManager.instance;
    }



    public createTask(title: string,
        description: string,
        dueDate: Date,
        createdBy: user,
        assignedTo: user,
        ):task{

            const Task = new task(title,description,dueDate,assignedTo,createdBy);    
            const taskId=Task.getId();
            const userId = createdBy.getId();
            this.tasks.set(taskId,Task);
            
            if(!this.userTasks.has(userId)){
                this.userTasks.set(userId,[]);
            }
            this.userTasks.get(userId)?.push(Task);
            return Task;
        }

        public getTask(taskId: string): task | undefined {
            return this.tasks.get(taskId);
        }


        public updateTask(taskId:string,updates:Updates
        ){
            let Task=this.tasks.get(taskId);
            if(!Task){
                throw new Error("Task not found");
            }

            if(updates.title)Task?.setTitle(updates.title);
            if(updates.description)Task?.setDescription(updates.description);
            if (updates.dueDate) Task.setDueDate(updates.dueDate);
            if (updates.taskStatus) Task.setStatus(updates.taskStatus);

            this.tasks.set(taskId,Task);

            const userId=Task.getTaskCreator()?.getId();
            const userTaskLists=this.userTasks.get(userId);
            if(userTaskLists){
               const index= userTaskLists.findIndex((el)=>{
                return(el.getId()==taskId);
               })
               if(index!==-1){
                userTaskLists[index]=Task;
               }
            }
            return Task;

        }







        







}