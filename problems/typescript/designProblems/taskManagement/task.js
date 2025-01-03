"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.task = exports.TaskStatus = void 0;
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["PENDING"] = "PENDING";
    TaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
    TaskStatus["COMPLETED"] = "COMPLETED";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
var taskPriority;
(function (taskPriority) {
    taskPriority["LOW"] = "LOW";
    taskPriority["MEDIUM"] = "MEDIUM";
    taskPriority["HIGH"] = "HIGH";
})(taskPriority || (taskPriority = {}));
class task {
    constructor(title, description, dueDate, assignedTo, createdBy) {
        this.taskId = this.generateTaskId();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.createdBy = createdBy;
        this.assignedTo = assignedTo;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.completedAt = null;
        this.taskStatus = TaskStatus.PENDING;
    }
    generateTaskId() {
        return (Date.now().toString());
    }
    getId() {
        return this.taskId;
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    getDueDate() {
        return this.dueDate;
    }
    getTaskCreator() {
        return this.createdBy;
    }
    setTitle(title) {
        this.title = title;
        this.updateTimestamp();
    }
    setDescription(description) {
        this.description = description;
        this.updateTimestamp();
    }
    setDueDate(dueDate) {
        this.dueDate = dueDate;
        this.updateTimestamp();
    }
    setAssignedTo(user) {
        this.assignedTo = user;
        this.updateTimestamp();
    }
    setStatus(status) {
        this.taskStatus = status;
        if (status === TaskStatus.COMPLETED) {
            this.completedAt = new Date();
        }
        this.updateTimestamp();
    }
    updateTimestamp() {
        this.updatedAt = new Date();
    }
}
exports.task = task;
