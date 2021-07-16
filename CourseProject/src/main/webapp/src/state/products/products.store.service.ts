import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { setEntities } from '@datorama/akita';
import { Observable } from 'rxjs';
import { accessories } from 'src/assets/data/accessories';
import { phones } from 'src/assets/data/phones';
import { tablets } from 'src/assets/data/tablets';
import { Product } from '../product.model';
import { ProductsStore } from './products.store';

@Injectable({ providedIn: 'root' })
export class ProductsStoreService {
  constructor(private productsStore: ProductsStore, private http: HttpClient) {}

  // loadHttp(category: string): void {
  //   const products = this.http.get<Product[]>('localhost:8080/api/products/' + category).subscribe((response: Product[]) => {
  //     this.productsStore.set(response);
  //   });
  // }

  // getData(category: string): void {
  //   this.http.get<Product[]>('http://localhost:8080/api/products/' + category).subscribe(response => this.productsStore.add(response));
  // }

  updateProducts(category: string): void {
    switch (category) {
      case 'phones': {
        this.productsStore.set(phones);
        break;
      }
      case 'tablets': {
        this.productsStore.set(tablets);
        break;
      }
      case 'accessories': {
        this.productsStore.set(accessories);
        break;
      }
    }
  }

  updateProductsType(category: string): void {
    this.productsStore.update({productType: category});
  }
}
