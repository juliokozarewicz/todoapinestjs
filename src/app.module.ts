import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { todoCoreController } from './modules/todocore/todo.controller';
import { todoModule } from './modules/todocore/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'monorail.proxy.rlwy.net',
      port: 31046,
      username: 'postgres',
      password: 'zqKyCsbKtyocLOrgtBJdFkYGHBYFVnWv',
      database: 'railway',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Atenção: em produção, mude para false e utilize migrações.
    }),
    todoModule
  ],
  controllers: [AppController, todoCoreController],
  providers: [AppService],
})
export class AppModule {}
