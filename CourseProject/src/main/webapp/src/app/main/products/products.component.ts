import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsStoreService } from 'src/state/products/products.store.service';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  public productType: string = '';

  constructor(private activatedRoute: ActivatedRoute, private productsStoreService: ProductsStoreService,
    private productService: ProductsService) { }

  ngOnInit(): void {
    this.productType = this.activatedRoute.snapshot.params['param'];
    // this.productsStoreService.loadHttp(this.productType);
    this.productsStoreService.getData(this.productType);
  }
}
