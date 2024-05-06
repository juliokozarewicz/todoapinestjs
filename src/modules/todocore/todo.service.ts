import { BadRequestException, Injectable } from '@nestjs/common';
import { todoTasksEntity } from './todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class todoCoreService {

    // ---------------------------------------------------------------------------------
    constructor(
        @InjectRepository(todoTasksEntity)
            private readonly todoTasksEntity: Repository<todoTasksEntity>,
        ) {}
    // ---------------------------------------------------------------------------------

    async createTasks(body: any) {

        const task = body['task']
        const description = body['description']

        if (!task) {
            throw new BadRequestException("task name is required")
        }

        // insert in DB
        const taskData = this.todoTasksEntity.create({ task, description });
        return await this.todoTasksEntity.save(taskData);

    }

    async readTasks() {

        // get from DB
        return await this.todoTasksEntity.find();
    }

    async updateTasks(body: any) {

        const id = body['id']
        const task = body['task']
        const description = body['description']

        if (!task) {
            throw new BadRequestException("task name is required")
        }

        if (!id) {
            throw new BadRequestException("task id is required")
        }

        // update in DB
        const taskUpdate = await this.todoTasksEntity.findOne({ where: { id } });
        
        if (!taskUpdate) {
            throw new NotFoundException(`Task not found`);
        }

        taskUpdate.task = task;
        taskUpdate.description = description;

        return await this.todoTasksEntity.save(taskUpdate);
    }

    async deleteTasks(body: any) {

        const id = body['id']

        if (!id) {
            throw new BadRequestException("task id is required")
        }

        // update in DB
        const taskDelete = await this.todoTasksEntity.findOne({ where: { id } });

        if (!taskDelete) {
            throw new NotFoundException(`Task not found`);
        }

        return await this.todoTasksEntity.delete(id);

    }

}