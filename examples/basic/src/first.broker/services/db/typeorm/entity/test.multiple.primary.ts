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
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class TestMultiplePrimary {
  @PrimaryColumn('uuid')
  oneId!: string;

  @PrimaryColumn('uuid')
  twoId!: string;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at!: Date;
}
