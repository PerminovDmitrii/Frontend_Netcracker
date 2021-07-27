import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import { BasketStore } from './basket.store';

@Injectable({ providedIn: 'root' })
export class BasketService {
  constructor(private basketStore: BasketStore, private http: HttpClient) {}

  addProduct(product: Product): void {
      this.basketStore.add(product);
  }

  removeProduct(id: number): void {
      this.basketStore.remove(id);
  }
}
