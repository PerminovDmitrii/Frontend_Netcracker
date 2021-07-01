import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products.model';
import { ProductsStore } from './products.store';

@Injectable({ providedIn: 'root' })
export class ProductsStoreService {
  constructor(private productsStore: ProductsStore, private http: HttpClient) {}

  loadHttp(category: string): void {
    const products = this.http.get<Product[]>('localhost:8080/api/products/' + category).subscribe((response: Product[]) => {
      this.productsStore.add(response);
    });
  }
}
