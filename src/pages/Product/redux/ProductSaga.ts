import { MESSAGE_ERROR, MESSAGE_SUCCESS } from 'config/message';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  createProductAPI,
  deleteProductAPI,
  duplicateProductAPI,
  getListProductAPI,
  getListReviewAPI,
  getProductAPI,
  updateProductAPI,
  updateStatusReviewAPI,
} from 'services/manageProductApi';

import { toastError, toastSuccess } from 'utils/message';
import {
  EProductType,
  setListProductAction,
  setLoadingAction,
} from './ProductActions';

function* getListProduct({ payload, callBack }: any): any {
  try {
    const res: any = yield call(getListProductAPI, payload);
    if (res.status) {
      yield put(setListProductAction(res.data));
    }
    if (callBack) {
      callBack();
    }
  } catch (error: any) {
    yield put(setLoadingAction(false));
  }
}

function* getProduct({ payload, callBack }: any): any {
  try {
    const res: any = yield call(getProductAPI, payload);
    if (res.status) {
      if (callBack) {
        callBack(res.data);
      }
    }
  } catch (error: any) {
    yield put(setLoadingAction(false));
  }
}

function* createProduct({ payload, callBack }: any): any {
  try {
    const res: any = yield call(createProductAPI, payload);
    if (res.status) {
      toastSuccess(MESSAGE_SUCCESS.CREATE_PRODUCT);
      if (callBack) {
        callBack(res.data);
      }
    } else {
      toastError(MESSAGE_ERROR.CREATE_PRODUCT);
    }
  } catch (error: any) {
    toastError(MESSAGE_ERROR.CREATE_PRODUCT);
  }
}

function* updateProduct({ payload, callBack }: any): any {
  try {
    const res: any = yield call(updateProductAPI, payload);
    if (res.status) {
      toastSuccess(MESSAGE_SUCCESS.UPDATE_PRODUCT);
      if (callBack) {
        callBack(res.data);
      }
    } else {
      toastError(MESSAGE_ERROR.UPDATE_PRODUCT);
    }
  } catch (error: any) {
    toastError(MESSAGE_ERROR.UPDATE_PRODUCT);
  }
}

function* deleteProduct({ payload, callBack }: any): any {
  try {
    const res: any = yield call(deleteProductAPI, payload);
    if (res.status) {
      toastSuccess(MESSAGE_SUCCESS.DELETE_PRODUCT);
      if (callBack) {
        callBack(res.data);
      }
    } else {
      toastError(MESSAGE_ERROR.DELETE_PRODUCT);
    }
  } catch (error: any) {
    toastError(MESSAGE_ERROR.DELETE_PRODUCT);
  }
}

function* duplicateProduct({ payload, callBack }: any): any {
  try {
    const res: any = yield call(duplicateProductAPI, payload);
    if (res.status) {
      toastSuccess(MESSAGE_SUCCESS.DUPLICATE_PRODUCT);
      if (callBack) {
        callBack(res.data);
      }
    } else {
      toastError(MESSAGE_ERROR.DUPLICATE_PRODUCT);
    }
  } catch (error: any) {
    toastError(MESSAGE_ERROR.DUPLICATE_PRODUCT);
  }
}

function* getListReview({ payload, callBack }: any): any {
  try {
    const res: any = yield call(getListReviewAPI, payload);
    if (res.status) {
      if (callBack) {
        callBack(res.data);
      }
    }
  } catch (error: any) {}
}

function* updateStatusReview({ payload, callBack }: any): any {
  try {
    const res: any = yield call(updateStatusReviewAPI, payload);
    if (res.status) {
      toastSuccess(MESSAGE_SUCCESS.UPDATE_STATUS_REVIEW);
    } else {
      toastError(MESSAGE_ERROR.UPDATE_STATUS_REVIEW);
    }
  } catch (error: any) {}
}

export default function* productSaga() {
  yield takeLatest(EProductType.GET_LIST_PRODUCT, getListProduct);
  yield takeLatest(EProductType.GET_PRODUCT, getProduct);
  yield takeLatest(EProductType.CREATE_PRODUCT, createProduct);
  yield takeLatest(EProductType.UPDATE_PRODUCT, updateProduct);
  yield takeLatest(EProductType.DELETE_PRODUCT, deleteProduct);
  yield takeLatest(EProductType.DUPLICATE_PRODUCT, duplicateProduct);
  yield takeLatest(EProductType.GET_LIST_REVIEW, getListReview);
  yield takeLatest(EProductType.UPDATE_STATUS_REVIEW, updateStatusReview);
}
