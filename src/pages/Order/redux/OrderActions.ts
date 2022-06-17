export enum EOrderType {
    GET_LIST_ORDER       = '[order] GET_LIST_ORDER',
    SET_LIST_ORDER       = '[order] SET_LIST_ORDER',
    GET_ORDER_DETAIL     = '[order] GET_ORDER_DETAIL',
    CREATE_ORDER_STATUS  = '[order] CREATE_ORDER_STATUS',
}

export const getListOrderAction = (payload?:any,callBack?:any) => ({
    type: EOrderType.GET_LIST_ORDER,
    payload,callBack
});

export const setListOrderAction = (payload:any,callBack?:any) => ({
    type: EOrderType.SET_LIST_ORDER,
    payload,callBack
});

export const getOrderDetailAction = (payload:any,callBack?:any) => ({
    type: EOrderType.GET_ORDER_DETAIL,
    payload,callBack
});

export const createOrderStatusAction = (payload:any,callBack?:any) => ({
    type: EOrderType.CREATE_ORDER_STATUS,
    payload,callBack
});
