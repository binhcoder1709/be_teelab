import { Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Transaction } from "../../entities/transaction.entity";

@Injectable()
export class TransactionRepository {
  private transactionRepos: Repository<Transaction>;
  constructor(@Inject("DATA_SOURCE") private dataSource: DataSource) {
    this.transactionRepos = dataSource.getRepository(Transaction);
  }

  async findAll(): Promise<Transaction[]> {
    return await this.transactionRepos.find({relations: ['order.order_details.product']});
  }
}