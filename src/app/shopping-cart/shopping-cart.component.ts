import { Component, OnInit } from '@angular/core';
import { ShoppingCartServices } from "../Shared/ShoppingCartService";
import { ICartItems } from "../Shared/GeneralObject";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items: Array<ICartItems> = [];

  constructor(private _ShoppingCartServices: ShoppingCartServices) { }

  ngOnInit(): void {
    this.items = this._ShoppingCartServices.items;
  }

  RemoveItem(ItemId: number) {
    this._ShoppingCartServices.RemoveItem(ItemId);
    this.items = this._ShoppingCartServices.items;
  }

}
