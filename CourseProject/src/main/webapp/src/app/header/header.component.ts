import { Component, OnInit } from '@angular/core';
import { Catalog, DropDownMenuItem } from './models/catalog';
import { Signed } from './models/signed';
import { Unsigned } from './models/unsigned';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  catElements: DropDownMenuItem[];
  signElements: DropDownMenuItem[];
  unsignElements: DropDownMenuItem[];
  userElements: DropDownMenuItem[];
  isCatalogCliked: boolean = false;
  isUserCliked: boolean = false;

  isUserLoged: boolean = false; // пернести в стор
  userName: string = 'Account';

  constructor(private catalog: Catalog, private signed: Signed, private unsigned: Unsigned) {
    this.catElements = this.catalog.items;
    this.signElements = this.signed.items;
    this.unsignElements = this.unsigned.items;
    this.userElements = this.unsigned.items;
  }

  ngOnInit(): void {
  }

}
