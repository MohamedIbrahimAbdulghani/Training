import { Component, OnInit } from '@angular/core';
import { IItems } from '../Shared/GeneralObject';
import { ItemService } from "../Shared/ItemService";

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css']
})
export class ItemsPageComponent implements OnInit {

  constructor(private _ItemService: ItemService) { }

  items: Array<IItems>=[];

  ngOnInit(): void {

    this._ItemService.GetAllItems().subscribe((data) => {
      this.items = data;
      let body = <HTMLDivElement> document.body;
      let script = document.createElement('script');
      script.innerHTML = '';
      script.src="../assets/js/script.js";
      script.async = true;
      script.defer = true;
      body.appendChild(script);
    });
  }

}
