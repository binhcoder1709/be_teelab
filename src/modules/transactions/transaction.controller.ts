import { Controller, Get, HttpCode } from "@nestjs/common";
import { TransactionService } from "./transaction.service";
import { Transaction } from "../../entities/transaction.entity";

@Controller("/transaction")
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {
  }

  @Get()
  @HttpCode(200)
  async getAllTransactionsController(): Promise<Transaction[]> {
    return await this.transactionService.getAllTransactionsService();
  }
}