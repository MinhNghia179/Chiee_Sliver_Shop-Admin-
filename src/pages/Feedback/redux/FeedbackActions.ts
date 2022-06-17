
export enum EFeedbackType {
    GET_LIST_FEEDBACK = '[feedback] GET_LIST_FEEDBACK',
    SET_LIST_FEEDBACK = '[feedback] SET_LIST_FEEDBACK',
    DELETE_FEEDBACK = '[feedback] DELETE_FEEDBACK',
    UPDATE_STATUS_FEEDBACK = '[feedback] UPDATE_STATUS_FEEDBACK',
}

export const getListFeedbackAction = (payload?:any,callBack?:any) => ({
    type: EFeedbackType.GET_LIST_FEEDBACK,
    payload,callBack
});

export const setListFeedbackAction = (payload:any,callBack?:any) => ({
    type: EFeedbackType.SET_LIST_FEEDBACK,
    payload,callBack
});

export const updateStatusFeedbackAction = (payload:any,callBack?:any) => ({
    type: EFeedbackType.UPDATE_STATUS_FEEDBACK,
    payload,callBack
});

export const deleteFeedbackAction = (payload:any,callBack?:any) => ({
    type: EFeedbackType.DELETE_FEEDBACK,
    payload,callBack
});
