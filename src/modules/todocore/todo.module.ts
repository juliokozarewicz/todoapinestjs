import { Module } from "@nestjs/common";
import { todoCoreService } from "./todo.service";
import { todoCoreController } from "./todo.controller";
import { todoTasksEntity } from "./todo.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([todoTasksEntity])],
    providers: [todoCoreService],
    controllers: [todoCoreController],
    exports: [todoCoreService]
})
export class todoModule {}