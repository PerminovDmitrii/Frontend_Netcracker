import { Injectable } from '@angular/core';
import { getValue, QueryEntity } from '@datorama/akita';
import { Product } from '../product.model';
import { BasketState, BasketStore } from './basket.store';

@Injectable({
    providedIn: 'root'
})
export class BasketQuery extends QueryEntity<BasketState, Product> {

    allProducts$ = this.selectAll();
    basketCount = this.getCount();
    isBasketEmpty$ = this.select(state => state.isBasketEmpty);
    totalPrice = getValue(this.store, 'totalPrice');
    totalPrice$ = this.select(state => state.totalPrice);

    constructor(protected store: BasketStore) {
        super(store);
    }
}
