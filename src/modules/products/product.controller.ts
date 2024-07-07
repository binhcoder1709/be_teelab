import { Body, Controller, Get, HttpCode, Param, Post, UseGuards } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "src/entities/product.entity";
import { ProductDto } from "src/dto/product/product.dto";
import { JwtAuthGuard } from "../../share/guards/auth.guard";
import { RoleGuard } from "../../share/guards/role.guard";

@Controller("/product")
export class ProductController {
  constructor(private readonly productService: ProductService) {
  }

  @Get()
  @HttpCode(200)
  async getAllProductsController(): Promise<Product[]> {
    return await this.productService.getAllProductsService();
  }

  @Get("/:id")
  @HttpCode(200)
  async findByIdController(@Param() id: string): Promise<Product> {
    return await this.productService.findByIdService(id);
  }

  @UseGuards(JwtAuthGuard)
  @UseGuards(RoleGuard)
  @Post("/create")
  @HttpCode(201)
  async addProductController(@Body() productDto: ProductDto) {
    return await this.productService.addProductService(productDto);
  }
}
