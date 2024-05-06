import { Body, Controller, Delete, Get, Post, ValidationPipe } from '@nestjs/common';
import { todoCoreService } from './todo.service';
import { todoCreateDTO, todoDeleteDTO, todoUpdateDTO } from './todo.dto';
import { Put } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

@Controller('api')
export class todoCoreController {

    constructor (private readonly todoCoreService: todoCoreService) {}

    @ApiBody({ type: todoCreateDTO })
    @Post('insert')
    createTasks(@Body(new ValidationPipe({ transform: true })) body: todoCreateDTO) {
        return this.todoCoreService.createTasks(body);
    }

    @ApiBody({ type: todoCreateDTO })
    @Get()
    readTasks() {
        return this.todoCoreService.readTasks();
    }

    @ApiBody({ type: todoUpdateDTO })
    @Put('update')
    updateTasks(@Body(new ValidationPipe({ transform: true })) body: todoUpdateDTO) {
        return this.todoCoreService.updateTasks(body);
    }

    @ApiBody({ type: todoDeleteDTO })
    @Delete('delete')
    deleteTasks(@Body(new ValidationPipe({ transform: true })) body: todoDeleteDTO) {
        return this.todoCoreService.deleteTasks(body);
    }

}