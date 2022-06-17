import { ProductCategoryModel } from "pages/ProductCategory/models/ProductCategoryModel";
import client from ".";

export const getListProductCategoryAPI = () => {
  return client.get("product-category").then(res => res.data);
}

export const getProductCategoryAPI = (id:any) => {
  return client.get(`product-category/${id}`).then(res => res.data);
}

export const createProductCategoryAPI = (payload:ProductCategoryModel) =>{
  return client.post("product-category",payload).then(res => res.data);
}

export const updateProductCategoryAPI = (payload:ProductCategoryModel) =>{
  return client.put("product-category",payload).then(res => res.data);
}

export const deleteProductCategoryAPI = (id:any) =>{
  return client.delete(`product-category/${id}`).then(res => res.data);
}