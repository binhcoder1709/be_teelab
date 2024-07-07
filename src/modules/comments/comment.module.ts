import { Module } from "@nestjs/common";
import { OrmModule } from "../../configs/typeorm/orm.module";
import { JwtModule } from "@nestjs/jwt";
import * as process from "node:process";
import { UserModule } from "../users/user.module";
import { ProductModule } from "../products/product.module";
import { CommentRepository } from "./comment.repository";
import { CommentService } from "./comment.service";
import { CommentController } from "./comment.controller";

@Module({
  imports: [OrmModule, JwtModule.register({ secret: process.env.ACCESS_SECRET_KEY }), UserModule, ProductModule],
  providers: [CommentRepository, CommentService],
  controllers: [CommentController]
})
export class CommentModule {
}