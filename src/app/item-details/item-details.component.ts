import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IItems } from '../Shared/GeneralObject';
import { ItemService } from "../Shared/ItemService";
import { ShoppingCartServices } from "../Shared/ShoppingCartService";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item: Array<IItems>=[];

  GetItemId: any;

  constructor(private _ActivatedRoute: ActivatedRoute,
              private _ItemService: ItemService,
              private _ShoppingCartServices: ShoppingCartServices) { }

  ngOnInit(): void {

    this._ItemService.GetAllItems().subscribe((data) => {
      this.item = data;
    });

    let id: any;
    this._ActivatedRoute.paramMap.subscribe(params => {
      id = params.get('id');
      this._ItemService.GetItemById(id).subscribe((data) => {
        this.GetItemId = data;

      let body = <HTMLDivElement> document.body;
      let script = document.createElement('script');
      script.innerHTML = '';
      script.src="../assets/js/script.js";
      script.async = true;
      script.defer = true;
      body.appendChild(script);
      });
    })
  }
  AddToCart() {
      this._ShoppingCartServices.AddItem(this.GetItemId,1);
      alert(this._ShoppingCartServices.items.length);
  }
}
