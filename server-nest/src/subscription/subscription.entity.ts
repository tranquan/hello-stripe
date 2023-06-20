import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: string;

  @Column()
  plan_id: string;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  status: string;
}
