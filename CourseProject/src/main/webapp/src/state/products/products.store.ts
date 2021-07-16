import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Product } from '../product.model';

export interface ProductsState extends EntityState<Product> {
  products: Product[];
  productType: string;
}

const initialState = {
    products: []
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'products' })
export class ProductsStore extends EntityStore<ProductsState, Product> {
  constructor() {
    super();
  }
}
