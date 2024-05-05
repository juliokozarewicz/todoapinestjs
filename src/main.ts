import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { todoTasksEntity } from './modules/todocore/todo.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Todo API')
    .setDescription('API for to-do app development.')
    .setVersion('1.0')
    .addTag('tasks')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);

}
bootstrap();
