import { Controller, Get, HttpCode } from "@nestjs/common";
import { StatisticalService } from "./statistical.service";

@Controller('/statistical')
export class StatisticalController
{
  constructor(private readonly statisticalService:StatisticalService) {
  }

  @Get()
  @HttpCode(200)
  async soldProductsController()
  {
    return await this.statisticalService.soldProductsService()
  }
}