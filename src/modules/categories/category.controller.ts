import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from 'src/entities/category.entity';
import { ManagerGuard } from 'src/share/guards/manager.guard';
import { JwtAuthGuard } from 'src/share/guards/auth.guard';

@Controller('/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // @UseGuards(JwtAuthGuard)
  // @UseGuards(ManagerGuard)
  @Get()
  @HttpCode(200)
  async getAllCategoryController(): Promise<Category[]> {
    return await this.categoryService.getAllCategories();
  }

  @Get('/:id')
  @HttpCode(200)
  async getCategoryByIdController(@Param('id') id: string): Promise<Category> {
    return await this.categoryService.getCategoryByIdService(id);
  }

  @UseGuards(JwtAuthGuard)
  @UseGuards(ManagerGuard)
  @Delete('/:id')
  @HttpCode(200)
  async deleteCategoryController(@Param('id') id: string): Promise<boolean> {
    return await this.categoryService.deleteCategoryService(id);
  }
}
