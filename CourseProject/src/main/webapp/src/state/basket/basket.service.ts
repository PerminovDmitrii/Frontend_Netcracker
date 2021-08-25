import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { removeEntities } from '@datorama/akita';
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

  updateBasketEmpty(value: boolean): void {
    this.basketStore.update({isBasketEmpty: value});
  }

  updateTotalPrice(price: number): void {
    this.basketStore.update({totalPrice: price});
  }

  clearBasket(): void {
    this.basketStore.remove();
  }
}
