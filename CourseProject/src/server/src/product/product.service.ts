import { Injectable } from '@nestjs/common';
import { Product } from './product.models'; 
import { accessories } from 'src/data/accessories';
import { phones } from 'src/data/phones';
import { tablets } from 'src/data/tablets';

@Injectable()
export class ProductService {
  getProducts(category: string): Array<Product> {
    switch (category) {
      case 'accessories': return accessories;
      case 'phones': return phones;
      case 'tablets': return tablets;
    }
  }
}