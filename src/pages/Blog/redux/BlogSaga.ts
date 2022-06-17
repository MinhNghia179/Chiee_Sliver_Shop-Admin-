
import { call, put, takeLatest }          from "redux-saga/effects";

import {
  deleteBlogApi,
  duplicateBlogApi,
  getListBlogApi,
  getListBlogCommentApi,
  insertBlogApi,
  updateBlogApi,
  updateStatusCommentAPI,
}                                         from "services/manageBlogApi";
import { toastError, toastSuccess }       from "utils/message";
import { MESSAGE_ERROR, MESSAGE_SUCCESS } from "config/message";
import { EBlogType, setListBlogAction }   from "./BlogActions";

function* getListBlog({ payload, callBack }: any): any {
  try {
    const res: any = yield call(getListBlogApi, payload);
    if (res.status) {
      yield put(setListBlogAction(res.data));
      if (callBack) callBack();
    }
  } catch (e: any) {
    callBack();
  }
}

function* createBlog({ payload, callBack }: any): any {
  try {
    const res: any = yield call(insertBlogApi, payload);
    if (res.status) {
      toastSuccess(MESSAGE_SUCCESS.CREATE_BLOG);
      if (callBack) callBack();
    } else {
      toastError(MESSAGE_ERROR.CREATE_BLOG);
    }
  } catch (e: any) {
    toastError(MESSAGE_ERROR.CREATE_BLOG);
  }
}

function* updateBlog({ payload, callBack }: any): any {
  try {
    const res: any = yield call(updateBlogApi, payload);
    if (res.status) {
      toastSuccess(MESSAGE_SUCCESS.UPDATE_BLOG);
      if (callBack) callBack();
    } else {
      toastError(MESSAGE_ERROR.UPDATE_BLOG);
    }
  } catch (e: any) {
    toastError(MESSAGE_ERROR.UPDATE_BLOG);
  }
}

function* deleteBlog({ payload, callBack }: any): any {
  try {
    const res: any = yield call(deleteBlogApi, payload);
    if (res.status) {
      toastSuccess(MESSAGE_SUCCESS.DELETE_BLOG);
      if (callBack) callBack();
    } else {
      toastError(MESSAGE_ERROR.DELETE_BLOG);
    }
  } catch (e: any) {
    toastError(MESSAGE_ERROR.DELETE_BLOG);
  }
}

function* duplicateBlog({ payload, callBack }: any): any {
  try {
    const res: any = yield call(duplicateBlogApi, payload);
    if (res.status) {
      toastSuccess(MESSAGE_SUCCESS.DUPLICATE_BLOG);
      if (callBack) callBack();
    } else {
      toastError(MESSAGE_ERROR.DUPLICATE_BLOG);
    }
  } catch (e: any) {
    toastError(MESSAGE_ERROR.DUPLICATE_BLOG);
  }
}

function* getListBlogComment({ payload, callBack }: any): any {
  try {
    const res: any = yield call(getListBlogCommentApi, payload);
    callBack(res.data)
  } catch (e: any) {
  }
}

function* updateStatusComment({ payload, callBack }: any): any {
  try {
    const res: any = yield call(updateStatusCommentAPI, payload);
    if(res.status){
      toastSuccess(MESSAGE_SUCCESS.UPDATE_STATUS_COMMENT);
      if(callBack) callBack();
    }else{
      toastError(MESSAGE_ERROR.UPDATE_STATUS_COMMENT);
    }
  } catch (e: any) {
    toastError(MESSAGE_ERROR.UPDATE_STATUS_COMMENT);
  }
}

export default function* blogSaga() {
  yield takeLatest(EBlogType.GET_LIST_BLOG, getListBlog);
  yield takeLatest(EBlogType.ADD_BLOG, createBlog);
  yield takeLatest(EBlogType.UPDATE_BLOG, updateBlog);
  yield takeLatest(EBlogType.DELETE_BLOG, deleteBlog);
  yield takeLatest(EBlogType.DUPLICATE_BLOG, duplicateBlog);
  yield takeLatest(EBlogType.GET_LIST_BLOG_COMMENT, getListBlogComment);
  yield takeLatest(EBlogType.UPDATE_STATUS_COMMENT, updateStatusComment);
}
