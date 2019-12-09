import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
  Index,
} from 'typeorm';

import { User } from './user';

export enum AccountPlanEnum {
  FREE = 'FREE',
  STARTER = 'STARTER',
  PRO = 'PRO',
  ENTERPRISE = 'ENTERPRISE',
}

export enum AccountPlanStatusEnum {
  ACTIVE = 'ACTIVE',
  TRIALING = 'TRIALING',
  CANCELED = 'CANCELED',
  PAST_DUE = 'PAST_DUE',
}

@Entity()
@Index(['name'], { unique: true })
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('text')
  name!: string;

  @Column('enum', { enum: AccountPlanStatusEnum })
  plan_status!: AccountPlanEnum;

  @Column('enum', { enum: AccountPlanEnum })
  plan!: AccountPlanEnum;

  @Column('text')
  subscription_id!: string;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at!: Date;
}
