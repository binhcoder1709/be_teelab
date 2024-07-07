import { Module } from "@nestjs/common";
import { TransactionModule } from "../transactions/transaction.module";
import { StatisticalService } from "./statistical.service";
import { StatisticalController } from "./statistical.controller";

@Module({
  imports: [TransactionModule],
  providers: [StatisticalService],
  controllers: [StatisticalController]
})
export class StatisticalModule {
}