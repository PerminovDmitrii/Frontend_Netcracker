import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from 'src/state/basket/basket.service';
import { Product } from 'src/state/product.model';
import { ProductsQuery } from 'src/state/products/products.query';
import { MainService } from '../main.service';

@Component({
  selector: 'app-product-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent {

  product: Product | undefined;

  constructor(private activatedRoute: ActivatedRoute, private productsQuery: ProductsQuery, private basketService: BasketService, private mainService: MainService) {
    this.product = productsQuery.getProduct(this.activatedRoute.snapshot.params['param']);
  }

  getProductSpec(spec: string): string | undefined {
    return this.product?.techSpec.find(item => item.name === spec)?.value;
  }

  addToBasket(): void {
    if (this.product) {
      this.basketService.addProduct(this.product);
      this.basketService.updateBasketEmpty(false);
      this.mainService.updateTotalPrice(this.product.price);
    }
  }
}
