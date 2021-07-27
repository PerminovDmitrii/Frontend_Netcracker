import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Product } from '../product.model';

export interface BasketState extends EntityState<Product> {
  totalPrice: number;
}

const initialState: BasketState = {
    totalPrice: 0,
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'basket' })
export class BasketStore extends EntityStore<BasketState, Product> {
  constructor() {
    super(initialState);
  }
}
