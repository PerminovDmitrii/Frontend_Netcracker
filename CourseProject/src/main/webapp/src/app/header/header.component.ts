import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductsQuery } from 'src/state/products/products.query';
import { ProductsStoreService } from 'src/state/products/products.store.service';
import { HeaderService } from './header.service';
import { catalog, DropDownMenuItem } from './models/catalog';
import { signed } from './models/signed';
import { unsigned } from './models/unsigned';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  catElements: DropDownMenuItem[]; /** @internal */
  signElements: DropDownMenuItem[]; /** @internal */
  unsignElements: DropDownMenuItem[]; /** @internal */
  userElements: DropDownMenuItem[]; /** @internal */
  isCatalogCliked: boolean = false; /** @internal */
  isUserCliked: boolean = false; /** @internal */

  private isUserLoged: boolean = false; // в стор
  userName: string = 'Account'; // в стор

  constructor(private productsStoreService: ProductsStoreService, public headerService: HeaderService, private productsQuery: ProductsQuery) {
    this.catElements = catalog;
    this.signElements = signed;
    this.unsignElements = unsigned;
    this.userElements = unsigned;
  }

  ngOnInit(): void {
  }

  checkUserClick(): void {
    this.isUserCliked = !this.isUserCliked;
  }

  checkCatalogClick(): void {
    this.isCatalogCliked = !this.isCatalogCliked;
  }

  setProductsType(category: string): void {
    this.productsStoreService.updateProductsType(category.slice(9));
    this.productsStoreService.updateProducts(category.slice(9));
    this.productsStoreService.updateProductsBrands(this.productsQuery.getAll());
  }

}
