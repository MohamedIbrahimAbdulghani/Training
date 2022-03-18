
export interface IItems {
  ItemId: number;
  ItemName: string;
  SalesPrice: number;
  PurchasePrice?: number;
  CategoryName?: number;
  ImageName?: number;
  CategoryId?: number;
}
export interface ICartItems {
  ItemId: number;
  ItemName: string;
  SalesPrice: number;
  ImageName?: string;
  Qty: number;
  Total: number;
}
