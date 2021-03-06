import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Product } from '../product.model';

export interface Brand {
  id: number;
  brand: string;
}

export interface ProductsState extends EntityState<Product> {
  productType: string;
  productsBrands: Array<Brand>;
}

const initialState: ProductsState = {
    productType: '',
    productsBrands: []
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'products' })
export class ProductsStore extends EntityStore<ProductsState, Product> {
  constructor() {
    super(initialState);
  }
}
