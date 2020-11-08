import { Injectable, NotFoundException } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';


// Service in general provides the business logic
// The responsibility of Task service is e.g. to get all Tasks
// The service will be injected into the controller, which responsibility is to manage the requests
@Injectable()
export class TasksService {
    

    // getAllTasks(): Task[] {
    //     return this.tasks;
    // }

    // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    //     const { status, search} = filterDto;

    //     let tasks = this.getAllTasks();

    //     if(status) {
    //         tasks = tasks.filter(task => task.status === status)
    //     }

    //     if(search){
    //         tasks = tasks.filter(task => task.title.includes(search) ||
    //         task.description.includes(search),
    //         );
    //     }
        
    //     return tasks;
    // }

    // getTaskById(id: string): Task {
    //     const found = this.tasks.find(task => task.id === id);

    //     if(!found) {
    //         throw new NotFoundException(`Task with ID "${id}" not found`);
    //     }
    //     return found;
    // }

    // createTask(createTaskDto: CreateTaskDto): Task {
    //     const {title, description} = createTaskDto;
    //     const task: Task = {
    //         id: uuidv1(),
    //         title,
    //         description,
    //         status:TaskStatus.OPEN,
    //     };

    //     this.tasks.push(task);
    //     return task;
    // }

    // deleteTaskById(id: string): void {
    //     this.tasks = this.tasks.filter(task => task.id !== id);
    // }

    // updateTaskById(id: string, status: TaskStatus): Task {
    //     const task = this.getTaskById(id);
    //     task.status = status;
    //     return task;
    // }
}
