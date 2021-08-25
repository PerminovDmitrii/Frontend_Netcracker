import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Product } from '../product.model';
import { ProductsState, ProductsStore } from './products.store';

@Injectable({
    providedIn: 'root'
})
export class ProductsQuery extends QueryEntity<ProductsState, Product> {

    productsType$ = this.select('productType');
    allProducts$ = this.selectAll();
    productsBrand$ = this.select('productsBrand');

    getProduct(id: number): Product | undefined {
        return this.getEntity(id);
    }

    constructor(protected store: ProductsStore) {
        super(store);
    }

    // searchByName(value: string): Observable<Product[]> {
    //     this.select(state => {
    //         state.entities
    //     });
    // }
}
