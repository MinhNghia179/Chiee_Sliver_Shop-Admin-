import { call, put, takeLatest } from "redux-saga/effects";
import { EAuthType, loginSuccessAction } from "./AuthActions";
import { loginApi } from "services/authApi";
import { setLoadingAction } from "setup/redux/CommonReducer";
import { UserModel } from "../models/UserModel";
import { toastError, toastSuccess, toastWarning } from "utils/message";
import { MESSAGE_ERROR, MESSAGE_SUCCESS, MESSAGE_WARNING } from "config/message";
import { ROLE_CODE } from "config/constants";

function* login({ payload,callBack }: any):any {
  try {
    yield put(setLoadingAction(true));
    const res:any = yield call(loginApi, payload.email, payload.password );
    if (res) {
      const user:UserModel = res.user;
      if(user.role_code !== ROLE_CODE.USER){
        localStorage.setItem('accessToken', res.access_token|| "");
        yield put (loginSuccessAction(res))
        callBack();
        toastSuccess(MESSAGE_SUCCESS.LOGIN_SUCCESS)
      }else{
        toastWarning(MESSAGE_WARNING.ACCOUNT_PERMISSION)
      }
    }
    yield put(setLoadingAction(false));
  } catch (error: any) {
    yield put(setLoadingAction(false));
    toastError(MESSAGE_ERROR.LOGIN_ERROR)
  }
}

export default function* authSaga() {
  yield takeLatest(EAuthType.LOGIN, login);
}
