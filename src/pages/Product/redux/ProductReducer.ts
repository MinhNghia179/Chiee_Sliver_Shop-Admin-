import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ListProductModel } from "../models/ListProductModel";
import { EProductType } from "./ProductActions";

interface IProductState {
  ListProduct: ListProductModel;
  DataCategories?:any[];
  loading:boolean;
}
export const initialProductState: IProductState = {
  ListProduct: {
    results: [],
    total: 0,
    currentPage: 0,
    totalPage: 0,
  },
  DataCategories:[],
  loading:true,
};

const ProductReducer = persistReducer(
  { storage, key: "product", whitelist: [] },
  (state: IProductState = initialProductState, action: any) => {
    switch (action.type) {
      case EProductType.SET_LIST_PRODUCT: {
        return { ...state, ListProduct: action.payload };
      }
      case EProductType.SET_CATEGORIES: {
        return { ...state, DataCategories: action.payload };
      }
      case EProductType.SET_LOADING: {
        return { ...state, loading: action.payload };
      }
      default:
        return state;
    }
  }
);
export default ProductReducer;
