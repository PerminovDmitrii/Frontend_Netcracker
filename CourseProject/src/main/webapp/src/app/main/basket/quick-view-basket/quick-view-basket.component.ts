import { Component, Input } from '@angular/core';
import { BasketQuery } from 'src/state/basket/basket.query';
import { BasketService } from 'src/state/basket/basket.service';
import { Product } from 'src/state/product.model';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-quick-view-basket',
  templateUrl: './quick-view-basket.component.html',
  styleUrls: ['./quick-view-basket.component.less']
})
export class QuickViewBasketComponent {

  @Input() product!: Product;

  constructor(private basketService: BasketService, private basketQuery: BasketQuery, private mainService: MainService) { }

  removeProduct(): void {
    this.basketService.removeProduct(this.product.id);
    this.isBasketEmptyCheck();
    // this.mainService.decreaseTotalPrice(this.product.price);
  }

  isBasketEmptyCheck(): void {
    console.log(this.basketQuery.basketCount);
    if (this.basketQuery.basketCount === 0) {
      this.basketService.updateBasketEmpty(true);
    }
  }
}
