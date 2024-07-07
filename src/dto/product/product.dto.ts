import { IsArray, IsNumber, IsString, IsUrl, MaxLength } from 'class-validator';
import { Category } from 'src/entities/category.entity';
import { Color } from 'src/entities/color.entity';
import { ColorSize } from 'src/entities/colorSize.entity';
import { Size } from 'src/entities/size.entity';
import { User } from 'src/entities/user.entity';

export class ProductDto {
  @IsString()
  @MaxLength(100)
  product_name: string;

  @IsUrl()
  thumbnail: string;

  @IsUrl()
  thumbnail_hover: string;

  @IsArray()
  images: string[];

  @IsString()
  author: User[];

  @IsString()
  @MaxLength(50)
  description: string;

  @IsUrl()
  description_image: string;

  @IsString()
  category: Category;

  @IsNumber()
  price: number;

  colorSizes: ColorSize[];
}
