import { ListProductCategoryModel } from "pages/ProductCategory/models/ListProductCategoryModel";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { EProductCategoryType } from "./ProductCategoryActions";

interface IProductCategoryState {
  ListCategory:ListProductCategoryModel;
  loading:boolean;
}
export const initialProductCategoryState: IProductCategoryState = {
  ListCategory:{
    results: [],
    total: 0
  },
  loading:false
};

const ProductCategoryReducer = persistReducer(
  { storage, key: "product-category", whitelist: [] },
  (state: IProductCategoryState = initialProductCategoryState, action: any) => {
    switch (action.type) {
      case EProductCategoryType.SET_LIST_CATEGORY: {
        return {...state,ListCategory:action.payload};
      }
      case EProductCategoryType.SET_LOADING: {
        return {...state, loading:action.payload};
      }
      default:
        return state;
    }
  }
);
export default ProductCategoryReducer;
