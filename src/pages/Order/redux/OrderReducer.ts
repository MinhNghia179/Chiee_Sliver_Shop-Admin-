import { persistReducer }     from "redux-persist";
import storage                from "redux-persist/lib/storage";

import { ListOrderModel }     from "../models/OrderModel";
import { EOrderType }         from "./OrderActions";

interface IOrderState {
  ListOrder: ListOrderModel;
}
export const initialOrderState: IOrderState = {
  ListOrder: {
    results: [],
    total: 0
  },
};

const OrderReducer = persistReducer(
  { storage, key: "order", whitelist: [] },
  (state: IOrderState = initialOrderState, action: any) => {
    switch (action.type) {
      case EOrderType.SET_LIST_ORDER: {
        return { ...state, ListOrder: action.payload };
      }
      default:
        return state;
    }
  }
);
export default OrderReducer;
