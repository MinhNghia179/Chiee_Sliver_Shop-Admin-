import { call, put, takeLatest } from 'redux-saga/effects';

import { MESSAGE_ERROR, MESSAGE_SUCCESS } from 'config/message';
import {
  changeStatusAccountAPI,
  createAccountAPI,
  getAccountDetailAPI,
  getListAccountAPI,
  resetPasswordAccountAPI,
  updateInfoAccountAPI,
} from 'services/manageAccountApi';
import { getListRoleAPI } from 'services/managePermission';
import { setLoadingAction } from 'setup/redux/CommonReducer';
import { toastError, toastSuccess } from 'utils/message';
import {
  EAccountType,
  getListAccountAction,
  setAccountDetailAction,
  setListAccountAction,
  setListRoleAction,
} from './AccountActions';

function* getListAccount({ payload, callBack }: any): any {
  try {
    yield put(setLoadingAction(true));
    const res: any = yield call(getListAccountAPI, payload);
    if (res.status) {
      yield put(setListAccountAction(res.data));
    }
    yield put(setLoadingAction(false));
  } catch (error: any) {
    yield put(setLoadingAction(false));
  }
}

function* getAccountDetail({ payload, callBack }: any): any {
  try {
    yield put(setLoadingAction(true));
    const res: any = yield call(getAccountDetailAPI, payload);
    if (res.status) {
      yield put(setAccountDetailAction(res.data));
    }
    yield put(setLoadingAction(false));
  } catch (error: any) {
    yield put(setLoadingAction(false));
  }
}

function* getListRole({ payload, callBack }: any): any {
  try {
    const res: any = yield call(getListRoleAPI);
    if (res.status) {
      yield put(setListRoleAction(res.data));
    }
  } catch (error: any) {}
}

function* createAccount({ payload, callBack }: any): any {
  try {
    const res: any = yield call(createAccountAPI, payload);
    if (res.status) {
      toastSuccess(MESSAGE_SUCCESS.CREATE_ACCOUNT);
      yield put(getListAccountAction({}));
    } else {
      toastSuccess(res.message);
    }
    if (callBack) callBack();
  } catch (error: any) {
    toastError(MESSAGE_ERROR.CREATE_ACCOUNT);
  }
}

function* updateStatusAccount({ payload, callBack }: any): any {
  try {
    const res: any = yield call(changeStatusAccountAPI, payload);
    if (res.status) {
      toastSuccess(MESSAGE_SUCCESS.UPDATE_STATUS_ACCOUNT);
      yield put(getListAccountAction({}));
    } else {
      toastSuccess(res.message);
    }
    if (callBack) callBack();
  } catch (error: any) {
    toastError(MESSAGE_ERROR.UPDATE_STATUS_ACCOUNT);
  }
}

function* resetPasswordAccount({ payload, callBack }: any): any {
  try {
    const res: any = yield call(resetPasswordAccountAPI, payload);
    if (res.status) {
      toastSuccess(MESSAGE_SUCCESS.RESET_PASSWORD);
    } else {
      toastError(MESSAGE_ERROR.RESET_PASSWORD);
    }
    if (callBack) callBack();
  } catch (error: any) {
    toastError(MESSAGE_ERROR.RESET_PASSWORD);
  }
}

function* updateInfoAccount({ payload, callBack }: any): any {
  try {
    const res: any = yield call(updateInfoAccountAPI, payload);
    if (res.status) {
      toastSuccess(MESSAGE_SUCCESS.UPDATE_INFO_ACCOUNT);
    } else {
      toastError(MESSAGE_ERROR.UPDATE_INFO_ACCOUNT);
    }
    if (callBack) callBack();
  } catch (error: any) {
    toastError(MESSAGE_ERROR.UPDATE_INFO_ACCOUNT);
  }
}

export default function* productSaga() {
  yield takeLatest(EAccountType.GET_LIST_ACCOUNT, getListAccount);
  yield takeLatest(EAccountType.GET_ACCOUNT_DETAIL, getAccountDetail);
  yield takeLatest(EAccountType.GET_LIST_ROLE, getListRole);
  yield takeLatest(EAccountType.CREATE_ACCOUNT, createAccount);
  yield takeLatest(EAccountType.UPDATE_STATUS_ACCOUNT, updateStatusAccount);
  yield takeLatest(EAccountType.RESET_PASSWORD_ACCOUNT, resetPasswordAccount);
  yield takeLatest(EAccountType.UPDATE_INFO_ACCOUNT, updateInfoAccount);
}
