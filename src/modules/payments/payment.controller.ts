import { Controller, HttpCode, Post } from "@nestjs/common";
import { PaymentService } from "./payment.service";

@Controller('/payment')
export class PaymentController
{
    constructor(private readonly paymentService:PaymentService){}

    @Post()
    @HttpCode(201)
    async addPaymentController(){}
}