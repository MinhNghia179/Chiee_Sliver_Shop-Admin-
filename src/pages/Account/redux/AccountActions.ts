export enum EAccountType {
  GET_LIST_ACCOUNT        = "[account] GET_LIST_ACCOUNT",
  SET_LIST_ACCOUNT        = "[account] SET_LIST_ACCOUNT",
  GET_ACCOUNT_DETAIL      = "[account] GET_ACCOUNT_DETAIL",
  SET_ACCOUNT_DETAIL      = "[account] SET_ACCOUNT_DETAIL",
  GET_LIST_ROLE           = "[account] GET_LIST_ROLE",
  SET_LIST_ROLE           = "[account] SET_LIST_ROLE",
  CREATE_ACCOUNT          = "[account] CREATE_ACCOUNT",
  UPDATE_STATUS_ACCOUNT   = "[account] UPDATE_STATUS_ACCOUNT",
  RESET_PASSWORD_ACCOUNT  = "[account] RESET_PASSWORD_ACCOUNT",
  UPDATE_INFO_ACCOUNT     = "[account] UPDATE_INFO_ACCOUNT",
}

export const getListAccountAction = (payload: any, callBack?: any) => ({
  type: EAccountType.GET_LIST_ACCOUNT,
  payload, callBack,
});

export const setListAccountAction = (payload: any, callBack?: any) => ({
  type: EAccountType.SET_LIST_ACCOUNT,
  payload, callBack,
});

export const getAccountDetailAction = (payload: any, callBack?: any) => ({
  type: EAccountType.GET_ACCOUNT_DETAIL,
  payload, callBack,
});

export const setAccountDetailAction = (payload: any, callBack?: any) => ({
  type: EAccountType.SET_ACCOUNT_DETAIL,
  payload, callBack,
});

export const getListRoleAction = (payload: any, callBack?: any) => ({
  type: EAccountType.GET_LIST_ROLE,
  payload, callBack,
});

export const setListRoleAction = (payload: any) => ({
  type: EAccountType.SET_LIST_ROLE,
  payload
});

export const createAccountAction = (payload: any,callBack?: any) => ({
  type: EAccountType.CREATE_ACCOUNT,
  payload,callBack
});

export const updateStatusAccountAction = (payload: any,callBack?: any) => ({
  type: EAccountType.UPDATE_STATUS_ACCOUNT,
  payload,callBack
});

export const resetPasswordAccountAction = (payload: any,callBack?: any) => ({
  type: EAccountType.RESET_PASSWORD_ACCOUNT,
  payload,callBack
});

export const updateInfoAccountAction = (payload: any,callBack?: any) => ({
  type: EAccountType.UPDATE_INFO_ACCOUNT,
  payload,callBack
});
