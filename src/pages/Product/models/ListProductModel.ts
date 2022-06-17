import { ProductModel } from "./ProductModel";

export interface ListProductModel {
  results: ProductModel[];
  total: number;
  currentPage: number;
  totalPage:number;
}
