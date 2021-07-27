import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Product } from '../product.model';
import { BasketState, BasketStore } from './basket.store';

@Injectable({
    providedIn: 'root'
})
export class BasketQuery extends QueryEntity<BasketState, Product> {

    allProducts$ = this.selectAll();
    basketCount = this.getCount();

    constructor(protected store: BasketStore) {
        super(store);
    }
}
