import { IItems } from "./GeneralObject";
import { Injectable } from "@angular/core";
import { ApiConfig } from "./ApiConfig";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ItemService {

  constructor(private _HttpClient: HttpClient) {}

  GetPopularItems(): Observable<Array<IItems>> {
    return this._HttpClient.get<Array<IItems>>(ApiConfig.ServerUrl + ApiConfig.ItemApiEndPoint + "/PopularItems");
  }

  GetAllItems(): Observable<Array<IItems>> {
    return this._HttpClient.get<Array<IItems>>(ApiConfig.ServerUrl + ApiConfig.ItemApiEndPoint);
  }

  GetNewItems(): Observable<Array<IItems>> {
    return this._HttpClient.get<Array<IItems>>(ApiConfig.ServerUrl + ApiConfig.ItemApiEndPoint + "/NewItems");
  }
  // this is function to return the element by id
  GetItemById(id: number): Observable<IItems> {
    return this._HttpClient.get<IItems>(ApiConfig.ServerUrl + ApiConfig.ItemApiEndPoint + "/" + id);
  }
}
