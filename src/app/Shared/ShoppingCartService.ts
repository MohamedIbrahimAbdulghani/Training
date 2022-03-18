import { ICartItems } from "./GeneralObject";

export class ShoppingCartServices {

  items: Array<ICartItems> = [];
  totla: number = 0;

  constructor() {

    let myItems: any;
    if(localStorage.getItem("Cart") !== null) {
      myItems = localStorage.getItem("Cart");
    }
    this.items = JSON.parse(myItems);
    console.log(this.items);
  }

  AddItem(item: any, qty: number) {
    for(let i=0; i<this.items.length; i++) {
      if(this.items[i].ItemId === item.ItemId) {
        this.items[i].Qty += 1;
        return;
      }
    }
    let MyItem: ICartItems = {
      ItemId: item.ItemId,
      ItemName: item.ItemName,
      SalesPrice: item.SalesPrice,
      ImageName: item.ImageName,
      Qty: qty,
      Total: item.SalesPrice * qty
    }
    this.items.push(MyItem);
    localStorage.setItem("Cart", JSON.stringify(this.items));
  }


  RemoveItem(ItemId: number) {
    for(let i=0; i<this.items.length; i++) {
      if(this.items[i].ItemId === ItemId) {
        this.items.splice(i, 1);
        localStorage.setItem("Cart", JSON.stringify(this.items));
        return;
      }
    }
  }

}
