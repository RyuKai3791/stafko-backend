import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Staff } from './staff.entity';

@Entity()
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  cuantia: number

  @Column()
  fecha_inicio: Date;

  @Column()
  fecha_fin: Date;

  @ManyToOne(() => Staff, staff => staff.projects)
  staff: Staff;
}
