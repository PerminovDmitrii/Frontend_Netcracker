import { Injectable } from '@angular/core';
import { entitiesToArray, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { ProductsState, ProductsStore } from './products.store';

@Injectable({
    providedIn: 'root'
})
export class ProductsQuery extends QueryEntity<ProductsState, Product> {

    productsType$ = this.select('productType');
    allProducts$ = this.selectAll();

    getProduct(id: number): Product | undefined {
        return this.getEntity(id);
    }

    constructor(protected store: ProductsStore) {
        super(store);
    }
}
