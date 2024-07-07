import { Injectable } from "@nestjs/common";
import { TransactionRepository } from "./transaction.repository";
import { Transaction } from "../../entities/transaction.entity";

@Injectable()
export class TransactionService {
  constructor(private readonly transactionRepos: TransactionRepository) {
  }

  async getAllTransactionsService(): Promise<Transaction[]> {
    return await this.transactionRepos.findAll()
  }
}