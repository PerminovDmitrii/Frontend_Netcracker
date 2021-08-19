import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product, PRODUCTS_TYPES } from 'src/state/product.model';
import { ProductsQuery } from 'src/state/products/products.query';
import { ProductsStoreService } from 'src/state/products/products.store.service';
import { MainService } from '../main.service';

@Component({
  selector: 'app-products',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent {

  public productType$: Observable<string>;
  public products$: Observable<Product[]>;
  public filterValue: string = '';

  constructor(private activatedRoute: ActivatedRoute, private productsStoreService: ProductsStoreService,
    private productsQuery: ProductsQuery, public mainService: MainService) {
    // this.productsStoreService.updateProductsType(this.activatedRoute.snapshot.params['param']);
    const currentURLParam = activatedRoute.snapshot.params['param'];
    if (this.productsQuery.getValue().productType === '' && currentURLParam in PRODUCTS_TYPES) {
      this.productsStoreService.updateProductsType(currentURLParam);
      this.productsStoreService.getData(currentURLParam);
      this.productsStoreService.updateProductsBrands(this.productsQuery.getAll());
    }
    this.productType$ = this.productsQuery.productsType$;
    this.products$ = this.productsQuery.allProducts$;
  }

  filterProductsByName(): void {

  }
}
