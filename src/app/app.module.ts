import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemBoxComponent } from './item-box/item-box.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { ItemService } from "./Shared/ItemService";
import { HttpClientModule } from "@angular/common/http";
import { ShoppingCartServices } from './Shared/ShoppingCartService';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    ItemBoxComponent,
    ItemDetailsComponent,
    ItemsPageComponent,
    ShoppingCartComponent,
    BillingInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ItemService,
    ShoppingCartServices,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
