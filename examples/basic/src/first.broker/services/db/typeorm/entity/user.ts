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
  Unique,
} from 'typeorm';

import { Account } from './account';
import { UserProfile } from './user.profile';
@Entity()
@Unique(['email'])
@Unique(['first_name', 'last_name'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  email!: string;

  @Column({ nullable: true })
  password?: string;

  @Column({ nullable: true })
  first_name?: string;

  @Column({ nullable: true })
  last_name?: string;

  @Column('timestamptz')
  last_logged_at!: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at!: Date;

  @ManyToOne(type => Account)
  @JoinColumn({ name: 'account_id' })
  account_id!: Account;

  @OneToOne(type => UserProfile)
  @JoinColumn({ name: 'user_profile_id' })
  user_profile_id!: UserProfile;
}
