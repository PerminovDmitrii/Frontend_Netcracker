import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { Contacts } from './footer/models/contacts';
import { SocialNetworks } from './footer/models/social-networks';
import { HeaderComponent } from './header/header.component';
import { Catalog } from './header/models/catalog';
import { Signed } from './header/models/signed';
import { Unsigned } from './header/models/unsigned';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [Catalog, Signed, Unsigned, Contacts, SocialNetworks],
  bootstrap: [AppComponent]
})
export class AppModule { }
