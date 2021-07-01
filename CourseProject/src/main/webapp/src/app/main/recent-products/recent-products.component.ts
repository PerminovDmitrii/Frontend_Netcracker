import { Component, OnInit } from '@angular/core';
import { Product } from 'src/state/products/products.model';

@Component({
  selector: 'app-recent-products',
  templateUrl: './recent-products.component.html',
  styleUrls: ['./recent-products.component.less']
})
export class RecentProductsComponent implements OnInit {

  public recentlyDevices: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public addRecentlyDeviceToCart(id: number): void {

  }

}
