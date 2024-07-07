import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Payment } from 'src/entities/payment.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class PaymentRepository {
  private paymentRepository: Repository<Payment>;
  constructor(@Inject('DATA_SOURCE') private readonly dataSource: DataSource) {
    this.paymentRepository = dataSource.getRepository(Payment);
  }

  async createOne(data: Partial<Payment>): Promise<Payment> {
    try {
      return await this.paymentRepository.save(data);
    } catch (error) {
      throw new InternalServerErrorException('Internal server error');
    }
  }
}
