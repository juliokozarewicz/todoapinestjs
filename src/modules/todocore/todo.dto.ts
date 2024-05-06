import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, IsOptional } from 'class-validator';


export class todoCreateDTO {
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(255)
  task: string;

  @ApiProperty()
  @IsOptional()
  @MaxLength(1000)
  description: string;
}

export class todoUpdateDTO {

  @ApiProperty()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(255)
  task: string;

  @ApiProperty()
  @IsOptional()
  @MaxLength(1000)
  description: string;
}

export class todoDeleteDTO {

  @ApiProperty()
  @IsNotEmpty()
  id: string;
}