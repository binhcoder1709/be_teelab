import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Product } from "./product.entity";

@Entity("comments")
export class Comment {
  @PrimaryGeneratedColumn("uuid")
  comment_id: string;

  @Column()
  content: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  @ManyToOne(() => User, user => user.comments)
  user: User;

  @ManyToOne(() => Product, prod => prod.comments)
  product: Product;
}