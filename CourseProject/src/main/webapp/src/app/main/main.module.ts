import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthorizationSuccessComponent } from './authorization-success/authorization-success.component';
import { BasketComponent } from './basket/basket.component';
import { QuickViewBasketComponent } from './basket/quick-view-basket/quick-view-basket.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainService } from './main.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { QuickViewComponent } from './quick-view/quick-view.component';
import { RecentProductsComponent } from './recent-products/recent-products.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AuthorizationSuccessComponent,
    BasketComponent,
    LoginFormComponent,
    MainPageComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    ProductsComponent,
    RecentProductsComponent,
    RegistrationFormComponent,
    UserProfileComponent,
    QuickViewComponent,
    QuickViewBasketComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  providers: [MainService]
})
export class MainModule { }
