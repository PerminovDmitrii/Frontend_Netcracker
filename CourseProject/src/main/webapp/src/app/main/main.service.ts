import { Injectable } from '@angular/core';
import { BasketQuery } from 'src/state/basket/basket.query';
import { BasketService } from 'src/state/basket/basket.service';
import { Product } from 'src/state/product.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private basketQuery: BasketQuery, private basketService: BasketService) { }

  updateTotalPrice(price: number): void {
    const total: number = this.basketQuery.totalPrice;
    this.basketService.updateTotalPrice(total + price);
  }

  decreaseTotalPrice(price: number): void {
    const total: number = this.basketQuery.totalPrice;
    this.basketService.updateTotalPrice(total - price);
  }

  trackByFn(index: number, elem: Product): number {
    return elem.id;
  }
}
