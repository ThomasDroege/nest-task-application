import { Injectable } from '@nestjs/common';

// Service in general provides the business logic
// The responsibility of Task service is e.g. to get all Tasks
// The service will be injected into the controller, which responsibility is to manage the requests
@Injectable()
export class TasksService {
    private tasks = [];

    getAllTasks() {
        return this.tasks;
    }
}
