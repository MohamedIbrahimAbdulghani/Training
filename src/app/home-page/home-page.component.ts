import { Component, OnInit } from '@angular/core';
import { ItemService } from "../Shared/ItemService";
import { IItems } from "../Shared/GeneralObject";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private _ItemService: ItemService) { }

  popularItems: Array<IItems> = [];
  items: Array<IItems> = [];
  newItems: Array<IItems> = [];

  ngOnInit(): void {

    this._ItemService.GetPopularItems().subscribe((data) => {
      this.popularItems = data;

    });
    this._ItemService.GetAllItems().subscribe((data) => {
      this.items = data;
    });
    this._ItemService.GetNewItems().subscribe((data) => {
      this.newItems = data;

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
