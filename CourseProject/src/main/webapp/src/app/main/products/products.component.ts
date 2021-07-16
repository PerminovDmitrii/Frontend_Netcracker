import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/state/product.model';
import { ProductsQuery } from 'src/state/products/products.query';
import { ProductsStoreService } from 'src/state/products/products.store.service';
// import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent {

  public productType$: Observable<string>;
  public products$: Observable<Product[]>;

  constructor(private activatedRoute: ActivatedRoute, private productsStoreService: ProductsStoreService, private productsQuery: ProductsQuery) {
    // this.productsStoreService.updateProductsType(this.activatedRoute.snapshot.params['param']);
    this.productType$ = productsQuery.productsType$;
    this.products$ = productsQuery.allProducts$;
  }

  trackByFn(index: number, elem: Product): number {
    return elem.id;
  }
}
