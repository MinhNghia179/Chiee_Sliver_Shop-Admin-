import { call, put, takeLatest } from "redux-saga/effects";
import { getOrderStatisticalAPI, getOrderStatusStatisticalAPI } from "services/manageOrderApi";
import { getStatisticalProductBestSellingAPI } from "services/manageProductApi";

import { EDashboardType, setOrderStatistical, setOrderStatusStatistical, setProductBestSellingAction } from "./DashboardActions";

function* getOrderStatistical({ payload, callBack }: any):any {
  try {
    const res:any = yield call(getOrderStatisticalAPI);
    if (res.status) {
      yield put(setOrderStatistical(res.data));
    }
  } catch (e: any) {
    
  } 
}

function* getOrderStatusStatistical({ payload, callBack }: any):any {
  try {
    const res:any = yield call(getOrderStatusStatisticalAPI);
    if (res.status) {
      yield put(setOrderStatusStatistical(res.data));
    }
  } catch (e: any) {
    
  } 
}

function* getProductBestSelling({ payload, callBack }: any):any {
  try {
    const res:any = yield call(getStatisticalProductBestSellingAPI);
    if (res.status) {
      yield put(setProductBestSellingAction(res.data));
    }
  } catch (e: any) {
    
  } 
}

export default function* dashboardSaga() {
  yield takeLatest(EDashboardType.GET_ORDER_STATISTICAL, getOrderStatistical);
  yield takeLatest(EDashboardType.GET_ORDER_STATUS_STATISTICAL, getOrderStatusStatistical);
  yield takeLatest(EDashboardType.GET_PRODUCT_BEST_SELLING, getProductBestSelling);
}
