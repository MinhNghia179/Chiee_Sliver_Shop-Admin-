// Router Name
export const ROUTER_NAME = {
  ROOT: "/",
  DASHBOARD: {
    PATH:"/",
    NAME:"Dashboard"
  },
  PRODUCT_LIST: {
    PATH:"/manage-product/list",
    NAME:"Danh sách sản phẩm"
  },
  PRODUCT_CATEGORY: {
    PATH:"/manage-product/category",
    NAME:"Danh mục sản phẩm"
  },
  BLOG: {
    PATH:"/manage-blog",
    NAME:"Danh sách bài viết"
  },
  ACCOUNT: {
    PATH:"/manage-account",
    NAME:"Quản lý tài khoản"
  },
  USER_LIST: {
    PATH:"/manage-user/list",
    NAME:"Danh sách tài khoản thành viên"
  },
  USER_EDIT: {
    PATH:"/manage-user/edit",
    NAME:"Cập nhật tài khoản người dùng"
  },
  LOGIN: {
    PATH:"login",
    NAME:"Đăng nhập"
  },
  LOGOUT: {
    PATH:"logout",
    NAME:"Đăng xuất"
  },
  FORGOT_PASSWORD: {
    PATH:"forgot-password",
    NAME:"Quyên mật khẩu"
  },
  ORDER: {
    PATH:"/manage-order",
    NAME:"Quản lý đơn hàng"
  },
  CONTACT: {
    PATH:"/manage-feedback",
    NAME:"Quản lý phản hồi"
  },
};

//

export default {
  REACT_APP_API_URL: process.env.REACT_APP_API_URL,
};

export const ERROR_TIMEOUT = "Lỗi kết nối!";

export const AVATAR_DEFAULT =
  "https://www.gifcen.com/wp-content/uploads/2021/05/goku-gif-7.gif";
export const NO_IMAGE =
  "data:image/png;base64,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";

export const ROLE_CODE = {
  ADMIN:"ADMIN",
  USER:"USER",
  MANAGE_PRODUCT:"MANAGE_PRODUCT",
  MANAGE_ORDER:"MANAGE_ORDER",
  MANAGE_BLOG:"MANAGE_BLOG"
}

export const LIST_ROLE = [
  {
    text: "Quản trị viên",
    value: ROLE_CODE.ADMIN,
  },
  {
    text: "Người dùng",
    value: ROLE_CODE.USER,
  },
  {
    text: "Quản lý sản phẩm",
    value: ROLE_CODE.MANAGE_PRODUCT,
  },
  {
    text: "Quản lý đơn hàng",
    value: ROLE_CODE.MANAGE_ORDER,
  },
  {
    text: "Quản lý bài viết",
    value: ROLE_CODE.MANAGE_BLOG,
  }
]

export const REGEX_PHONE_NUMBER = /(0[3|5|7|8|9])+([0-9]{8})\b/g;


export const ORDER_STATUS = {
  WAIT_CONFIRM: {
    CODE: "WAIT_CONFIRM",
    NAME: "Chờ xác nhận",
  },
  CANCEL: {
    CODE: "CANCEL",
    NAME: "Hủy đơn hàng",
  },
  CONFIRM: {
    CODE: "CONFIRM",
    NAME: "Xác nhận đơn hàng",
  },
  DELIVERY: {
    CODE: "DELIVERY",
    NAME: "Đang giao hàng",
  },
  SUCCESSFUL_DELIVERY: {
    CODE: "SUCCESSFUL_DELIVERY",
    NAME: "Giao hàng thành công",
  },
};

export const LIST_ORDER_STATUS = [
  'WAIT_CONFIRM','CANCEL','CONFIRM','DELIVERY','SUCCESSFUL_DELIVERY'
];

export const LIST_FILTER_ORDER_STATUS = [
  {
    text: ORDER_STATUS.WAIT_CONFIRM.NAME,
    value: ORDER_STATUS.WAIT_CONFIRM.NAME,
  },
  {
    text: ORDER_STATUS.CONFIRM.NAME,
    value: ORDER_STATUS.CONFIRM.NAME,
  },
  {
    text: ORDER_STATUS.DELIVERY.NAME,
    value: ORDER_STATUS.DELIVERY.NAME,
  },
  {
    text: ORDER_STATUS.SUCCESSFUL_DELIVERY.NAME,
    value: ORDER_STATUS.SUCCESSFUL_DELIVERY.NAME,
  },
  {
    text: ORDER_STATUS.CANCEL.NAME,
    value: ORDER_STATUS.CANCEL.NAME,
  },
];

export const TIME_LOADING = 1000;