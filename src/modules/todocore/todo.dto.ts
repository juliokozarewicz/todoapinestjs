import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, IsOptional } from 'class-validator';


export class todoCreateDTO {
  @ApiProperty({ 
    example: 'build an empire', 
    maxLength: 255
  })
  task: string;

  @ApiProperty({ 
    example: 'Study how and build a lasting and solid empire.',
    maxLength: 1000
  })
  @IsOptional()
  @MaxLength(1000)
  description: string;
}

export class todoReadDTO {}

export class todoUpdateDTO {
  @ApiProperty()
  id: string;

  @ApiProperty({ 
    example: 'build an empire', 
    maxLength: 255
  })
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(255)
  task: string;

  @ApiProperty({ 
    example: 'Study how and build a lasting and solid empire.',
    maxLength: 1000
  })
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