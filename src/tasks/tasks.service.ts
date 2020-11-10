import { Injectable, NotFoundException } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';


// Service in general provides the business logic
// The responsibility of Task service is e.g. to get all Tasks
// The service will be injected into the controller, which responsibility is to manage the requests
@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
    ){}

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

    async getTaskById(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id);

        if(!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }

        return found;
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskRepository.createTask(createTaskDto);

    }

   

    // deleteTaskById(id: string): void {
    //     this.tasks = this.tasks.filter(task => task.id !== id);
    // }

    // updateTaskById(id: string, status: TaskStatus): Task {
    //     const task = this.getTaskById(id);
    //     task.status = status;
    //     return task;
    // }
}
