import { call, put, takeLatest } from "redux-saga/effects";
import { createProductCategoryAPI, deleteProductCategoryAPI, getListProductCategoryAPI, getProductCategoryAPI, updateProductCategoryAPI } from "services/manageProductCategoryApi";

import {
  EProductCategoryType,
  setListProductCategoryAction,
  setLoadingAction,
} from "./ProductCategoryActions";

function* getListProductCategory({ payload, callBack }: any):any {
  try {
    const res:any = yield call(getListProductCategoryAPI);
    if (res.status) {
      yield put(setListProductCategoryAction(res.data));
      if(callBack){
        callBack(res.data)
      }
    }

    
  } catch (e: any) {
    yield put(setLoadingAction(false));
  }
}

function* createProductCategory({ payload, callBack }: any):any {
  try {
    const res = yield call(createProductCategoryAPI,payload);
    if(res){
      callBack(res)
    }
  } catch (error: any) {
    
  }
}

function* getProductCategory({ payload, callBack }: any):any {
  try {
    const res = yield call(getProductCategoryAPI,payload.id);
    if(res){
      callBack(res)
    }
  } catch (error: any) {
    
  }
}

function* updateProductCategory({ payload, callBack }: any):any {
  try {
    const res = yield call(updateProductCategoryAPI,payload);
    if(res){
      callBack(res)
    }
  } catch (error: any) {
    
  }
}

function* deleteProductCategory({ payload, callBack }: any):any {
  try {
    const res = yield call(deleteProductCategoryAPI,payload.id);
    if(res){
      callBack(res)
    }
  } catch (error: any) {
    
  }
}

export default function* productCategorySaga() {
  yield takeLatest(EProductCategoryType.GET_LIST_CATEGORY, getListProductCategory);
  yield takeLatest(EProductCategoryType.GET_CATEGORY, getProductCategory);
  yield takeLatest(EProductCategoryType.CREATE_CATEGORY, createProductCategory);
  yield takeLatest(EProductCategoryType.UPDATE_CATEGORY, updateProductCategory);
  yield takeLatest(EProductCategoryType.DELETE_CATEGORY, deleteProductCategory);
}
