import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/state/product.model';
import { ProductsQuery } from 'src/state/products/products.query';

@Component({
  selector: 'app-product-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private activatedRoute: ActivatedRoute, private productsQuery: ProductsQuery) {
    this.product = productsQuery.getProduct(this.activatedRoute.snapshot.params['param']);
  }

  ngOnInit(): void {
  }

  getProductSpec(spec: string): string | undefined {
    return this.product?.techSpec.find(item => item.name = spec)?.value;
  }

}
