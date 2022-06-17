export enum EProductType {
    GET_LIST_PRODUCT        = '[product] GET_LIST_PRODUCT',
    SET_CATEGORIES          = '[product] SET_CATEGORIES',
    GET_PRODUCT             = '[product] GET_PRODUCT',
    SET_LIST_PRODUCT        = '[product] SET_LIST_PRODUCT',
    CREATE_PRODUCT          = '[product] CREATE_PRODUCT',
    UPDATE_PRODUCT          = '[product] UPDATE_PRODUCT',
    DELETE_PRODUCT          = '[product] DELETE_PRODUCT',
    DUPLICATE_PRODUCT       = '[product] DUPLICATE_PRODUCT',
    GET_LIST_REVIEW         = '[product] GET_LIST_REVIEW',
    UPDATE_STATUS_REVIEW    = '[product] UPDATE_STATUS_REVIEW',
    SET_LOADING             = '[product] SET_LOADING',
}

export const getListProductAction = (payload:any,callBack?:any) => ({
    type: EProductType.GET_LIST_PRODUCT,
    payload,callBack
});

export const setCategoriesAction = (payload:any) => ({
    type: EProductType.SET_CATEGORIES,
    payload
});

export const getProductAction = (payload:any,callBack?:any) => ({
    type: EProductType.GET_PRODUCT,
    payload,callBack
});

export const setListProductAction = (payload:any) => ({
    type: EProductType.SET_LIST_PRODUCT,
    payload
});


export const createProductAction = (payload:any,callBack?:any) => ({
    type: EProductType.CREATE_PRODUCT,
    payload,callBack
});

export const updateProductAction = (payload:any,callBack?:any) => ({
    type: EProductType.UPDATE_PRODUCT,
    payload,callBack
});

export const deleteProductAction = (payload:any,callBack?:any) => ({
    type: EProductType.DELETE_PRODUCT,
    payload,callBack
});

export const duplicateProductAction = (payload:any,callBack?:any) => ({
    type: EProductType.DUPLICATE_PRODUCT,
    payload,callBack
});

export const getListReviewAction = (payload:any,callBack?:any) => ({
    type: EProductType.GET_LIST_REVIEW,
    payload,callBack
});

export const updateStatusReviewAction = (payload:any,callBack?:any) => ({
    type: EProductType.UPDATE_STATUS_REVIEW,
    payload,callBack
});

export const setLoadingAction = (payload:any) => ({
    type: EProductType.SET_LOADING,
    payload
});