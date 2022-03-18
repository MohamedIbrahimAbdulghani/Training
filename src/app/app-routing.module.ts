import { BillingInfoComponent } from './billing-info/billing-info.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home", component: HomePageComponent},
  {path:"item", component: ItemsPageComponent},
  {path:"itemdetails/:id", component: ItemDetailsComponent},
  {path:"shoppingcart", component: ShoppingCartComponent},
  {path:"billinginfo", component: BillingInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
