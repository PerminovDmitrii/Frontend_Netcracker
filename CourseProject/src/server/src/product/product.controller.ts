import { Controller, Get, Param } from '@nestjs/common';
import { Product } from './product.models';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':category')
  getProducts(@Param() category): Array<Product> {
    return this.productService.getProducts(category.category);
  }
}
