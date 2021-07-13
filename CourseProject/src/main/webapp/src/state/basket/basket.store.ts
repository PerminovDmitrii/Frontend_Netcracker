import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Product } from '../product.model';

export interface BasketState extends EntityState<Product[]> {}

const initialState = {
    basket: []
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'basket' })
export class BasketStore extends EntityStore<BasketState, Product[]> {
  constructor() {
    super(initialState);
  }
}
