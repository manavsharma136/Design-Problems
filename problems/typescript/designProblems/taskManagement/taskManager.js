"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskManager = void 0;
const task_1 = require("./task");
class taskManager {
    constructor() {
        if (taskManager.instance) {
            return taskManager.instance;
        }
        this.tasks = new Map();
        this.userTasks = new Map();
        taskManager.instance = this;
    }
    static getInstance() {
        if (!taskManager.instance) {
            taskManager.instance = new taskManager();
        }
        return taskManager.instance;
    }
    createTask(title, description, dueDate, createdBy, assignedTo) {
        var _a;
        const Task = new task_1.task(title, description, dueDate, assignedTo, createdBy);
        const taskId = Task.getId();
        const userId = createdBy.getId();
        this.tasks.set(taskId, Task);
        if (!this.userTasks.has(userId)) {
            this.userTasks.set(userId, []);
        }
        (_a = this.userTasks.get(userId)) === null || _a === void 0 ? void 0 : _a.push(Task);
        return Task;
    }
    getTask(taskId) {
        return this.tasks.get(taskId);
    }
    updateTask(taskId, updates) {
        var _a;
        let Task = this.tasks.get(taskId);
        if (!Task) {
            throw new Error("Task not found");
        }
        if (updates.title)
            Task === null || Task === void 0 ? void 0 : Task.setTitle(updates.title);
        if (updates.description)
            Task === null || Task === void 0 ? void 0 : Task.setDescription(updates.description);
        if (updates.dueDate)
            Task.setDueDate(updates.dueDate);
        if (updates.taskStatus)
            Task.setStatus(updates.taskStatus);
        this.tasks.set(taskId, Task);
        const userId = (_a = Task.getTaskCreator()) === null || _a === void 0 ? void 0 : _a.getId();
        const userTaskLists = this.userTasks.get(userId);
        if (userTaskLists) {
            const index = userTaskLists.findIndex((el) => {
                return (el.getId() == taskId);
            });
            if (index !== -1) {
                userTaskLists[index] = Task;
            }
        }
        return Task;
    }
}
exports.taskManager = taskManager;
