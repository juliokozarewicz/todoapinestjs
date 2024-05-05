import { BadRequestException, Injectable } from '@nestjs/common';
import { todoTasksEntity } from './todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class todoCoreService {

    // ---------------------------------------------------------------------------------
    constructor(
        @InjectRepository(todoTasksEntity)
            private readonly todoTasksEntity: Repository<todoTasksEntity>,
        ) {}

        // create function
        async insert(task: string, description:string): Promise<todoTasksEntity> {
            const taskData = this.todoTasksEntity.create({ task, description });
            return await this.todoTasksEntity.save(taskData);
        }
    // ---------------------------------------------------------------------------------

    async createTasks(body: any) {

        const task = body['task']
        const description = body['description']

        if (!task) {
            throw new BadRequestException("task name is required")
        }

        // insert in DB
        await this.insert(task, description)

    }

}