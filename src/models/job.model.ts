import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('jobs')
export class JobEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cron: string;

  @Column({ nullable: true })
  lastRun: Date | null;

  @Column({ nullable: true })
  nextRun: Date | null;
}