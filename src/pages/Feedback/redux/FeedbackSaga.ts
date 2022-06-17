import { MESSAGE_ERROR, MESSAGE_SUCCESS } from "config/message";
import { call, put, takeLatest } from "redux-saga/effects";
import { deleteFeedbackAPI, getListFeedbackAPI, updateStatusFeedbackAPI } from "services/manageFeedback";
import { setLoadingAction } from "setup/redux/CommonReducer";
import { toastError, toastSuccess } from "utils/message";
import { EFeedbackType, getListFeedbackAction, setListFeedbackAction } from "./FeedbackActions";

function* getListFeedback({ payload, callBack }: any): any {
  try {
    yield put(setLoadingAction(true));
    const res: any = yield call(getListFeedbackAPI);
    if (res.status) {
      yield put(setListFeedbackAction(res.data));
      if (callBack) {
        callBack();
      }
    }
    yield put(setLoadingAction(false));
  } catch (e: any) {
    yield put(setLoadingAction(false));
  }
}

function* deleteFeedback({ payload, callBack }: any): any {
  try {
    const res: any = yield call(deleteFeedbackAPI,payload);
    if (res.status) {
      toastSuccess(MESSAGE_SUCCESS.DELETE_FEEDBACK);
    }else{
      toastError(MESSAGE_ERROR.DELETE_FEEDBACK);
    }
    if (callBack) {
      callBack(res.status);
    }
  } catch (e: any) {
    toastError(MESSAGE_ERROR.DELETE_FEEDBACK);
  }
}

function* updateStatusFeedback({ payload, callBack }: any): any {
  try {
    const res: any = yield call(updateStatusFeedbackAPI,payload);
    if(res.status){
      if(callBack){
        callBack()
      }
    }
    
  } catch (e: any) {
    
  }
}

export default function* feedbackSaga() {
  yield takeLatest(EFeedbackType.GET_LIST_FEEDBACK, getListFeedback);
  yield takeLatest(EFeedbackType.DELETE_FEEDBACK, deleteFeedback);
  yield takeLatest(EFeedbackType.UPDATE_STATUS_FEEDBACK, updateStatusFeedback);
}
