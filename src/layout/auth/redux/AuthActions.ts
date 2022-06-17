export enum EAuthType {
  LOGIN             = "[auth] LOGIN",
  LOGIN_SUCCESS     = "[auth] LOGIN_SUCCESS",
  LOGOUT            = "[auth] LOGOUT",
  UPDATE_USER_INFO  = "[auth] UPDATE_USER_INFO",
}

export const loginAction = (payload: any, callBack: any) => ({
  type: EAuthType.LOGIN,
  payload, callBack,
});

export const loginSuccessAction = (data: any) => ({
  type: EAuthType.LOGIN_SUCCESS,
  payload: data,
});

export const logoutAction = ({ payload }: any) => ({
  type: EAuthType.LOGOUT,
  payload,
});

export const updateUserInfoAction = (payload: any) => ({
  type: EAuthType.UPDATE_USER_INFO,
  payload,
});
