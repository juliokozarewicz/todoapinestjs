import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';


export class todoTasksEntityDTO {
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(255)
  task: string;

  @ApiProperty()
  @MaxLength(1000)
  description: string;
}