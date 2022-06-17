import { ProductCategoryModel } from "./ProductCategoryModel";

export interface ListProductCategoryModel {
  results: ProductCategoryModel[];
  total: number;
}
