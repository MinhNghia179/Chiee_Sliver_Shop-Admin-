export interface ProductModel {
  id: number;
  category_id: number;
  name: string;
  price: number;
  promotion_price?: number;
  promotion_time_start?: string;
  promotion_time_end?: string;
  list_image?: string;
  short_description?: string;
  description?: string;
  created_at?: string;
  created_by?: string;
  modified_at?: string;
  modified_by?: string;
  properties?: string;
  status: boolean;
}
