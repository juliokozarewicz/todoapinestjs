import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { todoCoreService } from './todo.service';
import { todoTasksEntityDTO } from './todo.dto';

@Controller('api')
export class todoCoreController {

    constructor (private readonly todoCoreService: todoCoreService) {}

    @Post('insert')
    createTasks(@Body(new ValidationPipe({ transform: true })) body: todoTasksEntityDTO) {
        return this.todoCoreService.createTasks(body);
    }

}