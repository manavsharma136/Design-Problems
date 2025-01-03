export enum TaskStatus{
    PENDING='PENDING',
    IN_PROGRESS='IN_PROGRESS',
    COMPLETED='COMPLETED'

}
enum taskPriority{
    LOW='LOW',
    MEDIUM='MEDIUM',
    HIGH='HIGH'
}


import { user } from "./user";
export class task{
    private readonly taskId:string;
    private title:string;
    private description:string;
    private dueDate:Date;
    private assignedTo:user | null
    private readonly createdBy:user
    private createdAt:Date;
    private updatedAt:Date;
    private completedAt:Date|null;
    private taskStatus:TaskStatus;

    constructor(title:string,description:string,dueDate:Date,assignedTo:user,createdBy:user){
        this.taskId=this.generateTaskId();
        this.title=title
        this.description=description;
        this.dueDate=dueDate;
        this.createdBy=createdBy;
        this.assignedTo=assignedTo;
        this.createdAt=new Date();
        this.updatedAt=new Date();
        this.completedAt=null;
        this.taskStatus=TaskStatus.PENDING
    }



    private generateTaskId(){
        return (Date.now().toString());
    }


    public getId(): string {
        return this.taskId;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }

    public getDueDate(): Date {
        return this.dueDate;
    }
    public getTaskCreator():user{
        return this.createdBy;
    }
    public setTitle(title: string): void {
        this.title = title;
        this.updateTimestamp();
    }

    public setDescription(description: string): void {
        this.description = description;
        this.updateTimestamp();
    }

    public setDueDate(dueDate: Date): void {
        this.dueDate = dueDate;
        this.updateTimestamp();
    }

    public setAssignedTo(user: user | null): void {
        this.assignedTo = user;
        this.updateTimestamp();
    }

    public setStatus(status: TaskStatus): void {
        this.taskStatus = status;
        if (status === TaskStatus.COMPLETED) {
            this.completedAt = new Date();
        }
        this.updateTimestamp();
    }


    private updateTimestamp(): void {
        this.updatedAt = new Date();
    }

}
