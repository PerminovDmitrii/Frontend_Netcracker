import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsQuery } from '../../state/products/products.query';
import { Brand } from '../../state/products/products.store';
import { UserQuery } from '../../state/user/user.query';
import { HeaderService } from '../header/header.service';
import { catalog, DropDownMenuItem } from '../header/models/catalog';
import { signed } from '../header/models/signed';
import { unsigned } from '../header/models/unsigned';
import { MenuService } from './menu.service';
import { filter } from './models/filter';
import { sorting } from './models/sorting';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {

  @Input() type!: string;

  isTitleClicked: boolean = false;
  isSubmenuClicked: boolean = false;
  menuItems: DropDownMenuItem[] = [];
  brands$!: Observable<Brand[]>;
  minPrice: string = '';
  maxPrice: string = '';

  constructor(private userQuery: UserQuery, public headerService: HeaderService, public menuService: MenuService, private productsQuery: ProductsQuery) {
    switch (this.type) {
      case 'catalog': {
        this.menuItems = catalog;
        break;
      }
      case 'account': {
        userQuery.isSigned ? this.menuItems = signed : this.menuItems = unsigned;
        break;
      }
      case 'sorting': {
        this.menuItems = sorting;
        break;
      }
      case  'filter': {
        this.menuItems = filter;
        this.brands$ = productsQuery.productsBrand$;
        break;
      }
    }
  }

  checkClick(flag: boolean): void {
    flag = !flag;
  }

  sortBy(type: string): void {

  }

  filterByBrand(brand: string): void {

  }

}
