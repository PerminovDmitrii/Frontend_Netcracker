import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketQuery } from 'src/state/basket/basket.query';
import { BasketService } from 'src/state/basket/basket.service';
import { Product } from 'src/state/product.model';
import { MainService } from '../main.service';

@Component({
  selector: 'app-basket',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less']
})
export class BasketComponent {

  public products$: Observable<Product[]>;
  public totalPrice$: Observable <number>;

  constructor(public basketQuery: BasketQuery, private basketService: BasketService, public mainService: MainService) {
    this.products$ = this.basketQuery.allProducts$;
    this.totalPrice$ = this.basketQuery.totalPrice$;
  }

  isBasketEmptyCheck(): Observable<boolean> {
    return this.basketQuery.isBasketEmpty$;
  }

  clearBasket(): void {
    this.basketService.clearBasket();
    this.basketService.updateBasketEmpty(true);
  }
}
