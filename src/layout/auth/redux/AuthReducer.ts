import { persistReducer }   from 'redux-persist';
import storage              from 'redux-persist/lib/storage';

import { UserModel }        from '../models/UserModel';
import { EAuthType }        from './AuthActions';
import {AuthModel}          from "../models/AuthModel";

interface IAuthState {
    auth_info?: AuthModel
    user_info?: UserModel
}
export const initialAuthState: IAuthState = {
    auth_info: undefined,
    user_info: undefined,
}


const AuthReducer = persistReducer(
    { storage, key: 'auth', whitelist: ['auth_info', 'user_info'] },
    (state: IAuthState = initialAuthState, action: any) => {
        switch (action.type) {
            case EAuthType.LOGIN_SUCCESS: {
                const data = action.payload

                return {...state, auth_info: {access_token:data.access_token}, user_info: data.user}
            }
            case EAuthType.LOGOUT: {
                return {auth_info: undefined,user_info: undefined}
            }
            case EAuthType.UPDATE_USER_INFO: {
                return {...state, user_info: action.payload}
            }
            default:
                return state
        }
    }
)
export default AuthReducer;
