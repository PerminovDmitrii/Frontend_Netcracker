import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationSuccessComponent } from './main/authorization-success/authorization-success.component';
import { BasketComponent } from './main/basket/basket.component';
import { LoginFormComponent } from './main/login-form/login-form.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { ProductDetailsComponent } from './main/product-details/product-details.component';
import { ProductsComponent } from './main/products/products.component';
import { RegistrationFormComponent } from './main/registration-form/registration-form.component';
import { UserProfileComponent } from './main/user-profile/user-profile.component';

const routes: Routes = [
  { path: '#', component: MainPageComponent },
  { path: 'products/:param', component: ProductsComponent },
  { path: 'productdetails/:param', component: ProductDetailsComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'success', component: AuthorizationSuccessComponent},
  { path: 'basket', component: BasketComponent },
  { path: 'info', component: UserProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
