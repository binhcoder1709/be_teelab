import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductRepository } from "./product.repository";
import { ProductController } from "./product.controller";
import { OrmModule } from "src/configs/typeorm/orm.module";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "../users/user.module";

@Module({
  imports: [OrmModule, JwtModule.register({
    secret: process.env.ACCESS_SECRET_KEY
  }),UserModule],
  providers: [ProductService, ProductRepository],
  controllers: [ProductController],
  exports: [ProductRepository]
})
export class ProductModule {
}
