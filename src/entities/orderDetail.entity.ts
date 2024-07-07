import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';
import { Order } from './order.entity';

@Entity('order-detail')
export class OrderDetail {
  @PrimaryGeneratedColumn('uuid')
  order_detail_id: string;

  @ManyToOne(() => Order, (order) => order.order_details, {onDelete: 'CASCADE'})
  order: Order;

  @ManyToOne(() => Product, (prod) => prod.orderDetails)
  product: Product;

  @Column()
  quantity: number;
}
