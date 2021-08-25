import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { accessories } from 'src/assets/data/accessories';
import { phones } from 'src/assets/data/phones';
import { tablets } from 'src/assets/data/tablets';
import { Product } from '../product.model';
import { ProductsStore } from './products.store';

@Injectable({ providedIn: 'root' })
export class ProductsStoreService {
  constructor(private productsStore: ProductsStore, private http: HttpClient) {}

  getData(category: string): void {
    this.http.get<Product[]>('http://localhost:3000/products/' + category).subscribe(response => this.productsStore.set(response));
  }

  // updateProducts(category: string): void {
  //   switch (category) {
  //     case 'phones': {
  //       this.productsStore.set(phones);
  //       break;
  //     }
  //     case 'tablets': {
  //       this.productsStore.set(tablets);
  //       break;
  //     }
  //     case 'accessories': {
  //       this.productsStore.set(accessories);
  //       break;
  //     }
  //   }
  // }

  updateProductsType(category: string): void {
    this.productsStore.update({productType: category});
  }

  updateProductsBrands(products: Product[]): void {
    this.productsStore.update({productsBrands: this.getBrands(products)});
  }

  getBrands(products: Product[]): Array<String> {
    const brands: Array<String> = [];
    products.map( product => {
      brands.push(product.brand);
    });
    const setOfBrands = new Set(brands);
    return Array.from(setOfBrands);
  }
}
