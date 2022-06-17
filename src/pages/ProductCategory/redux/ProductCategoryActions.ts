
export enum EProductCategoryType {
    GET_LIST_CATEGORY   = '[product-category] GET_LIST_CATEGORY',
    SET_LIST_CATEGORY   = '[product-category] SET_LIST_CATEGORY',
    GET_CATEGORY        = '[product-category] SET_CATEGORY',
    CREATE_CATEGORY     = '[product-category] CREATE_CATEGORY',
    UPDATE_CATEGORY     = '[product-category] UPDATE_CATEGORY',
    DELETE_CATEGORY     = '[product-category] DELETE_CATEGORY',
    SET_LOADING         = '[product-category] SET_LOADING',
}

export const getListProductCategoryAction = (payload:any,callBack?:any) => ({
    type: EProductCategoryType.GET_LIST_CATEGORY,
    payload,callBack
});

export const setListProductCategoryAction = (payload:any) => ({
    type: EProductCategoryType.SET_LIST_CATEGORY,
    payload
});

export const getProductCategoryAction = (payload:any,callBack:any) => ({
    type: EProductCategoryType.GET_CATEGORY,
    payload,callBack
});

export const createProductCategoryAction = (payload:any,callBack:any) => ({
    type: EProductCategoryType.CREATE_CATEGORY,
    payload, callBack
});

export const updateProductCategoryAction = (payload:any,callBack:any) => ({
    type: EProductCategoryType.UPDATE_CATEGORY,
    payload, callBack
});

export const deleteProductCategoryAction = (payload:any,callBack:any) => ({
    type: EProductCategoryType.DELETE_CATEGORY,
    payload, callBack
});

export const setLoadingAction = (payload:any) => ({
    type: EProductCategoryType.SET_LOADING,
    payload
});