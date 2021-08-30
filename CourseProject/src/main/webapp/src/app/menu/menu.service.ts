import { Injectable } from '@angular/core';
import { ProductsQuery } from '../../state/products/products.query';
import { ProductsStoreService } from '../../state/products/products.store.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private productsStoreService: ProductsStoreService, private productsQuery: ProductsQuery) { }

  setProductsType(category: string): void {
    this.productsStoreService.updateProductsType(category.slice(9));
    this.productsStoreService.getData(category.slice(9));
    this.productsStoreService.updateProductsBrands(this.productsQuery.getAll());
  }

}
