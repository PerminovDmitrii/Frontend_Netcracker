import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Product } from '../product.model';

export interface RecentlyProductsState extends EntityState<Product[]> {}

const initialState = {
    products: []
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'recentlyProducts' })
export class RecentlyProductsStore extends EntityStore<RecentlyProductsState, Product[]> {
  constructor() {
    super(initialState);
  }
}
