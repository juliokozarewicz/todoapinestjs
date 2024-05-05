import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn   } from 'typeorm';


@Entity()
export class todoTasksEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column({ nullable: false, length: 255 })
  task: string;

  @Column({ nullable: true, length: 1000 })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}