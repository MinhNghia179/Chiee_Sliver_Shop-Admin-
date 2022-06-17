export interface OrderDetailModel {
  id               : number;
  order_id         : number;
  product_id       : number;
  product_name     : string;
  product_price    : number; 
  product_quantity : number;
  image            : string;
  properties       : any;
};

export interface ListOrderDetailModel{
  results : OrderDetailModel[],
  total   : number;
}