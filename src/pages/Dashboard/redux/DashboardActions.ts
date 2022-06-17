
export enum EDashboardType {
    SET_LOADING             = '[dashboard] SET_LOADING',
    GET_ORDER_STATISTICAL   = '[dashboard] GET_ORDER_STATISTICAL',
    SET_ORDER_STATISTICAL   = '[dashboard] SET_ORDER_STATISTICAL',
    GET_ORDER_STATUS_STATISTICAL   = '[dashboard] GET_ORDER_STATUS_STATISTICAL',
    SET_ORDER_STATUS_STATISTICAL   = '[dashboard] SET_ORDER_STATUS_STATISTICAL',
    GET_PRODUCT_BEST_SELLING   = '[dashboard] GET_PRODUCT_BEST_SELLING',
    SET_PRODUCT_BEST_SELLING   = '[dashboard] SET_PRODUCT_BEST_SELLING',
}

export const getOrderStatistical = (payload?:any,callBack?:any) => ({
    type: EDashboardType.GET_ORDER_STATISTICAL,
    payload,callBack
});

export const setOrderStatistical = (payload:any) => ({
    type: EDashboardType.SET_ORDER_STATISTICAL,
    payload
});

export const getOrderStatusStatistical = (payload?:any,callBack?:any) => ({
    type: EDashboardType.GET_ORDER_STATUS_STATISTICAL,
    payload,callBack
});

export const setOrderStatusStatistical = (payload:any) => ({
    type: EDashboardType.SET_ORDER_STATUS_STATISTICAL,
    payload
});

export const getProductBestSellingAction = (payload?:any,callBack?:any) => ({
    type: EDashboardType.GET_PRODUCT_BEST_SELLING,
    payload,callBack
});

export const setProductBestSellingAction = (payload:any) => ({
    type: EDashboardType.SET_PRODUCT_BEST_SELLING,
    payload
});

