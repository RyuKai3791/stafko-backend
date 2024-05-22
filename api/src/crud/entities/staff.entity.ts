// staff.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { ProjectEntity } from './project.entity';

@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nombre: string;

  @Column()
  apellidos: string;

  @Column()
  telefono: number;

  @Column()
  fecha_nacimiento: Date;

  @ManyToMany(() => ProjectEntity, project => project.staff)
  projects: ProjectEntity[];
}
