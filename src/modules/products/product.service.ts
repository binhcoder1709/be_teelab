import { Injectable } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { Product } from "src/entities/product.entity";
import { ProductDto } from "src/dto/product/product.dto";

@Injectable()
export class ProductService {
  constructor(private readonly productRepos: ProductRepository) {
  }

  async getAllProductsService(): Promise<Product[]> {
    return await this.productRepos.findAll();
  }

  async addProductService(productDto: ProductDto) {
    return this.productRepos.createOne(productDto);
  }

  async findByIdService(id: string): Promise<Product> {
    return await this.productRepos.findById(id);
  }
}
