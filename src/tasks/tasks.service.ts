import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
const {v1: uuidv1} = require('uuid');

// Service in general provides the business logic
// The responsibility of Task service is e.g. to get all Tasks
// The service will be injected into the controller, which responsibility is to manage the requests
@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(title: string, description: string): Task {
        const task: Task = {
            id: uuidv1(),
            title,
            description,
            status:TaskStatus.OPEN,
        };

        this.tasks.push(task);
        return task;
    }
}
