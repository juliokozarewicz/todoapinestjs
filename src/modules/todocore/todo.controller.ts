import { Body, Controller, Delete, Get, Post, ValidationPipe } from '@nestjs/common';
import { todoCoreService } from './todo.service';
import { todoCreateDTO, todoDeleteDTO, todoReadDTO, todoUpdateDTO } from './todo.dto';
import { Put } from '@nestjs/common';
import { ApiBody, ApiQuery } from '@nestjs/swagger';

@Controller('api')
export class todoCoreController {

    constructor (private readonly todoCoreService: todoCoreService) {}

    @Post('insert')
    @ApiQuery({ type: todoCreateDTO})
    createTasks(@Body(new ValidationPipe({ transform: true })) body: todoCreateDTO) {
        return this.todoCoreService.createTasks(body);
    }

    @Get('get')
    @ApiQuery({ type: todoReadDTO})
    readTasks(@Body(new ValidationPipe({ transform: true })) body: todoReadDTO) {
        return this.todoCoreService.readTasks();
    }

    @Put('update')
    @ApiQuery({ type: todoUpdateDTO})
    updateTasks(@Body(new ValidationPipe({ transform: true })) body: todoUpdateDTO) {
        return this.todoCoreService.updateTasks(body);
    }

    @Delete('delete')
    @ApiQuery({ type: todoDeleteDTO})
    deleteTasks(@Body(new ValidationPipe({ transform: true })) body: todoDeleteDTO) {
        return this.todoCoreService.deleteTasks(body);
    }
}