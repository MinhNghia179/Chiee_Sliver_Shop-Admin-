export enum EBlogType {
  GET_LIST_BLOG         = "[blog] GET_LIST_BLOG",
  SET_LIST_BLOG         = "[blog] SET_LIST_BLOG",
  ADD_BLOG              = "[blog] ADD_BLOG",
  UPDATE_BLOG           = "[blog] UPDATE_BLOG",
  DELETE_BLOG           = "[blog] DELETE_BLOG",
  DUPLICATE_BLOG        = "[blog] DUPLICATE_BLOG",
  GET_LIST_BLOG_COMMENT = "[blog] GET_LIST_BLOG_COMMENT",
  UPDATE_STATUS_COMMENT = "[blog] UPDATE_STATUS_COMMENT",
}

export const getListBlogAction = (payload: any, callBack?: any) => ({
  type: EBlogType.GET_LIST_BLOG,
  payload,
  callBack,
});

export const setListBlogAction = (payload: any, callBack?: any) => ({
  type: EBlogType.SET_LIST_BLOG,
  payload,
  callBack,
});

export const addBlogAction = (payload: any, callBack?: any) => ({
  type: EBlogType.ADD_BLOG,
  payload,
  callBack,
});

export const updateBlogAction = (payload: any, callBack?: any) => ({
  type: EBlogType.UPDATE_BLOG,
  payload,
  callBack,
});

export const deleteBlogAction = (payload: any, callBack?: any) => ({
  type: EBlogType.DELETE_BLOG,
  payload,
  callBack,
});

export const duplicateBlogAction = (payload: any, callBack?: any) => ({
  type: EBlogType.DUPLICATE_BLOG,
  payload,
  callBack,
});

export const getListBlogCommentAction = (payload: any, callBack: any) => ({
  type: EBlogType.GET_LIST_BLOG_COMMENT,
  payload, callBack,
});

export const updateStatusCommentAction = (payload: any, callBack?: any) => ({
  type: EBlogType.UPDATE_STATUS_COMMENT,
  payload, callBack,
});