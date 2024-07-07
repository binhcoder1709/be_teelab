import { Module } from "@nestjs/common";
import { TransactionService } from "./transaction.service";
import { TransactionRepository } from "./transaction.repository";
import { TransactionController } from "./transaction.controller";
import { OrmModule } from "../../configs/typeorm/orm.module";

@Module({
  imports: [OrmModule],
  providers: [TransactionService, TransactionRepository],
  controllers: [TransactionController],
  exports: [TransactionRepository]
})
export class TransactionModule {
}