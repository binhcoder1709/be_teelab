import { Module } from "@nestjs/common";
import { OrmModule } from "./configs/typeorm/orm.module";
import { UserModule } from "./modules/users/user.module";
import { AuthModule } from "./modules/auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import { BullModule } from "@nestjs/bull";
import { ProductModule } from "./modules/products/product.module";
import { CategoryModule } from "./modules/categories/category.module";
import { OrderModule } from "./modules/orders/order.module";
import { TransactionModule } from "./modules/transactions/transaction.module";
import { StatisticalModule } from "./modules/statisticals/statistical.module";
import { CommentModule } from "./modules/comments/comment.module";

@Module({
  imports: [
    OrmModule,
    UserModule,
    AuthModule,
    ProductModule,
    CategoryModule,
    OrderModule,
    TransactionModule,
    StatisticalModule,
    CommentModule,
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true })
  ]
})
export class AppModule {
}
