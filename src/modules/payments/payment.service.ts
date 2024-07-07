import { Injectable } from '@nestjs/common';
import { PaymentRepository } from './payment.repository';
import { PaymentDto } from 'src/dto/payment/createPayment.dto';
import { Payment } from 'src/entities/payment.entity';

@Injectable()
export class PaymentService {
  constructor(private readonly paymentRepos: PaymentRepository) {}

  async addPaymentService(data: PaymentDto): Promise<Payment> {
    return await this.paymentRepos.createOne(data);
  }
}
