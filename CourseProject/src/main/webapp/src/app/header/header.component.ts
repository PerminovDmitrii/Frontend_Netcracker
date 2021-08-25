import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
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
  isCatalogClicked: boolean = false; /** @internal */
  isUserClicked: boolean = false; /** @internal */

  private isUserLoged: boolean = false; // в стор
  userName: string = 'Account'; // в стор
  private wasInside: boolean = false;

  constructor(private productsStoreService: ProductsStoreService, public headerService: HeaderService, private productsQuery: ProductsQuery) {
    this.catElements = catalog;
    this.signElements = signed;
    this.unsignElements = unsigned;
    this.userElements = unsigned;
  }

  ngOnInit(): void {
  }

  checkUserClick(): void {
    this.isUserClicked = !this.isUserClicked;
    this.isCatalogClicked = false;
  }

  checkCatalogClick(): void {
    this.isCatalogClicked = !this.isCatalogClicked;
    this.isUserClicked = false;
  }

  setProductsType(category: string): void {
    this.productsStoreService.updateProductsType(category.slice(9));
    this.productsStoreService.getData(category.slice(9));
    this.productsStoreService.updateProductsBrands(this.productsQuery.getAll());
  }
}
