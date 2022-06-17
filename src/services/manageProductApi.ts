import { ProductModel } from "pages/Product/models/ProductModel";
import client from ".";

export const getListProductAPI = (payload:any) => {
  const {page = 0,pageSize = 10,category_id=-1,query='',status = -1,order_by = ''} = payload;
  return client.get(`product?page=${page}&pageSize=${pageSize}&category_id=${category_id}&query=${query}&status=${status}&order_by=${order_by}`).then(res => res.data);
}

export const getProductAPI = (id:any) => {
  return client.get(`product/${id}`).then(res => res.data);
}

export const createProductAPI = (payload:ProductModel) =>{
  return client.post("product",payload).then(res => res.data);
}

export const updateProductAPI = (payload:ProductModel) =>{
  return client.put("product",payload).then(res => res.data);
}

export const deleteProductAPI = (id:any) => {
  return client.delete(`product/${id}`).then(res => res.data);
}

export const duplicateProductAPI = (payload:any) => {
  return client.post('product/duplicate',payload).then(res => res.data);
}

export const getListReviewAPI = (product_id:any) =>{
  return client.get(`product-reviews?product_id=${product_id}`).then(res => res.data);
}

export const updateStatusReviewAPI = (payload:any) =>{
  return client.put("product-reviews",payload).then(res => res.data);
}

export const getStatisticalProductBestSellingAPI = () => {
  return client.get('statistical-product-best-selling').then(res => res.data);
}