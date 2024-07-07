import { Injectable } from "@nestjs/common";
import { TransactionRepository } from "../transactions/transaction.repository";

@Injectable()
export class StatisticalService {
  constructor(private readonly transactionRepos: TransactionRepository) {
  }

  async soldProductsService() {
    //   get order id from transaction
    const transactions = await this.transactionRepos.findAll();
    const orderDetail = transactions.map(item => item.order.order_details);
    // const products = orderDetail.map(item=>item.map(it=>it.))
  }
}