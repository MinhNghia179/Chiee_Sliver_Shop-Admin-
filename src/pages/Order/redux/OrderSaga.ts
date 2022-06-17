import { call, put, takeLatest }          from "redux-saga/effects";

import { 
  createOrderStatusAPI, 
  getListOrderAPI 
}                                         from "services/manageOrderApi";
import { setLoadingAction }               from "setup/redux/CommonReducer";
import { EOrderType, setListOrderAction } from "./OrderActions";

function* getListOrder({ payload, callBack }: any):any {
  try{
    yield put(setLoadingAction(true));
    const res:any = yield call(getListOrderAPI);
    if(res.status){
      yield put(setListOrderAction(res.data));
    }
    if(callBack){
      callBack();
    }
    yield put(setLoadingAction(false));
  }catch(error:any){
    yield put(setLoadingAction(false));
  }
}

function* createOrderStatus({ payload, callBack }: any):any {
  try{
    const res:any = yield call(createOrderStatusAPI,payload);
    if(res.status){
      if(callBack){
        callBack(true);
      }
    }else{
      if(callBack){
        callBack(false);
      }
    }
  }catch(error:any){
    if(callBack){
      callBack(false);
    }
  }
  
}

export default function* orderSaga() {
  yield takeLatest(EOrderType.GET_LIST_ORDER, getListOrder);
  yield takeLatest(EOrderType.CREATE_ORDER_STATUS, createOrderStatus);
}
