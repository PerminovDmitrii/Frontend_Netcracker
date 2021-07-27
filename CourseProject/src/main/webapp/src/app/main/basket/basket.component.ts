import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketQuery } from 'src/state/basket/basket.query';
import { Product } from 'src/state/product.model';

@Component({
  selector: 'app-basket',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less']
})
export class BasketComponent {

  public products$: Observable<Product[]>;
  public basketCount: number;

  constructor(private basketQuery: BasketQuery) {
    this.products$ = this.basketQuery.allProducts$;
    this.basketCount = this.basketQuery.basketCount;
  }

  isBasketEmpty(): boolean {
    return this.basketCount === 0 ? false : true;
  }

  trackByFn(index: number, elem: Product): number {
    return elem.id;
  }
}
