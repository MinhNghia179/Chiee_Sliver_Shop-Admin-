import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { AccountModel } from "../models/AccountModel";
import { ListAccountModel } from "../models/ListAccountModel";
import { ListRoleModel } from "../models/ListRoleModel";
import { EAccountType } from "./AccountActions";

interface IAccountState {
  ListAccount:ListAccountModel;
  AccountDetail?:AccountModel;
  ListRole:ListRoleModel;
}
export const initialAccountState: IAccountState = {
  ListAccount:{
    results:[],
    total:0
  },
  ListRole:{
    results:[],
    total:0
  }
};

const AccountReducer = persistReducer(
  { storage, key: "account", 
  whitelist: ["ListAccount","ListRole"],
  blacklist: ["AccountDetail"], },
  (state: IAccountState = initialAccountState, action: any) => {
    switch (action.type) {
      case EAccountType.SET_LIST_ACCOUNT: {
        return { ...state, ListAccount: action.payload };
      }
      case EAccountType.SET_ACCOUNT_DETAIL: {
        return { ...state, AccountDetail: action.payload };
      }
      case EAccountType.SET_LIST_ROLE: {
        return { ...state, ListRole: action.payload };
      }
      default:
        return state;
    }
  }
);
export default AccountReducer;
