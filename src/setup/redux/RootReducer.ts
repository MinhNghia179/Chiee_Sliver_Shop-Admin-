import { createSelectorHook } from 'react-redux';
import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

import authSaga from 'layout/auth/redux/AuthSaga';
import authReducer, {
  initialAuthState as authState,
} from 'layout/auth/redux/AuthReducer';
import productCategoryReducer, {
  initialProductCategoryState as productCategoryState,
} from 'pages/ProductCategory/redux/ProductCategoryReducer';
import productCategorySaga from 'pages/ProductCategory/redux/ProductCategorySaga';
import productReducer, {
  initialProductState as productState,
} from 'pages/Product/redux/ProductReducer';
import productSaga from 'pages/Product/redux/ProductSaga';
import accountReducer, {
  initialAccountState as accountState,
} from 'pages/Account/redux/AccountReducer';
import accountSaga from 'pages/Account/redux/AccountSaga';
import blogReducer, {
  initialBlogState as blogState,
} from 'pages/Blog/redux/BlogReducer';
import blogSaga from 'pages/Blog/redux/BlogSaga';
import orderReducer, {
  initialOrderState as orderState,
} from 'pages/Order/redux/OrderReducer';
import orderSaga from 'pages/Order/redux/OrderSaga';
import feedbackReducer, {
  initialFeedbackState as feedbackState,
} from 'pages/Feedback/redux/FeedbackReducer';
import feedbackSaga from 'pages/Feedback/redux/FeedbackSaga';
import dashboardReducer, {
  initialDashboardState as dashboardState,
} from 'pages/Dashboard/redux/DashboardReducer';
import dashboardSaga from 'pages/Dashboard/redux/DashboardSaga';
import CommonReducer, { defaultState as CommonState } from './CommonReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  common: CommonReducer,
  productCategory: productCategoryReducer,
  product: productReducer,
  account: accountReducer,
  blog: blogReducer,
  order: orderReducer,
  feedback: feedbackReducer,
  dashboard: dashboardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useSelector = createSelectorHook<{
  auth: typeof authState;
  common: typeof CommonState;
  productCategory: typeof productCategoryState;
  product: typeof productState;
  account: typeof accountState;
  blog: typeof blogState;
  order: typeof orderState;
  feedback: typeof feedbackState;
  dashboard: typeof dashboardState;
}>();

export function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(productCategorySaga),
    fork(productSaga),
    fork(accountSaga),
    fork(blogSaga),
    fork(orderSaga),
    fork(feedbackSaga),
    fork(dashboardSaga),
  ]);
}
