import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Product } from '../basket/basket.model';

export interface ProductsState extends EntityState<Product[]> {}

const initialState = {
    products: []
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'products' })
export class ProductsStore extends EntityStore<ProductsState, Product[]> {
  constructor() {
    super(initialState);
  }
}
