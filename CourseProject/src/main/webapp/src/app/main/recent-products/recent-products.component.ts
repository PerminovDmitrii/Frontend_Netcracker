import { Component, OnInit } from "@angular/core";

export interface RecentlyDevices {
  id: number;
  img: string;
  name: string;
  config: string;
  price: number;
  rating: number;
}

@Component({
  selector: "app-recent-products",
  templateUrl: "./recent-products.component.html",
  styleUrls: ["./recent-products.component.less"]
})
export class RecentProductsComponent implements OnInit {

  public recentlyDevices: RecentlyDevices[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public addRecentlyDeviceToCart(id: number): void {

  }

}
