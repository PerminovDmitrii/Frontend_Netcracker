import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BasketService } from 'src/state/basket/basket.service';
import { Product } from 'src/state/product.model';

@Component({
  selector: 'app-quick-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.less']
})
export class QuickViewComponent {

  @Input() product!: Product;

  constructor(private basketService: BasketService) { }

  addToCart($event: MouseEvent): void {
    this.basketService.addProduct(this.product);
    this.basketService.updateBasketEmpty(false);
    this.basketService.updateTotalPrice(this.product.price);
    $event.stopPropagation();
  }
}
