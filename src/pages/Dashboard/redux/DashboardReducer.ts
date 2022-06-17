import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { OrderStatisticalModel, OrderStatusStatisticalModel } from "../models/OrderStatisticalModel";
import { ProductBestSellingModel } from "../models/ProductBestSelling";
import { EDashboardType } from "./DashboardActions";

interface IDashboardState {
  ListOrderStatistical:OrderStatisticalModel[];
  ListOrderStatusStatistical:OrderStatusStatisticalModel[];
  ListProductBestSelling:ProductBestSellingModel[];
  loading:boolean;
}
export const initialDashboardState: IDashboardState = {
  ListOrderStatistical:[],
  ListOrderStatusStatistical:[],
  ListProductBestSelling:[],
  loading:false
};

const DashboardReducer = persistReducer(
  { storage, key: "dashboard", whitelist: [] },
  (state: IDashboardState = initialDashboardState, action: any) => {
    switch (action.type) {
      case EDashboardType.SET_ORDER_STATISTICAL: {
        return {...state,ListOrderStatistical:action.payload};
      }
      case EDashboardType.SET_ORDER_STATUS_STATISTICAL: {
        return {...state,ListOrderStatusStatistical:action.payload};
      }
      case EDashboardType.SET_PRODUCT_BEST_SELLING: {
        return {...state,ListProductBestSelling:action.payload};
      }
      default:
        return state;
    }
  }
);
export default DashboardReducer;
