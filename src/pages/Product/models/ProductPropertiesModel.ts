export interface ProductPropertiesModel {
  properties:ProductColorModel[]
}

export interface ProductColorModel {
  id: string;
  color_name: string;
  amount:number;
  sizes: ProductSizeModel[];
}

export interface ProductSizeModel {
  size_id: string;
  size_name: string;
  amount: number;
}
