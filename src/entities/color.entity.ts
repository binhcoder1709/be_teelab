import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Size } from './size.entity';
import { Product } from './product.entity';
import { ColorSize } from './colorSize.entity';

@Entity('colors')
export class Color {
  @PrimaryGeneratedColumn('uuid')
  color_id: string;

  @Column()
  color_name: string;

  @Column()
  image: string;

  @OneToOne(() => ColorSize, (colsiz) => colsiz.colors)
  colorSize: ColorSize;
}
