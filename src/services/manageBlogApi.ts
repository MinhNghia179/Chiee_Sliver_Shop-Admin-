import client from "."

export const getListBlogApi = (payload:any) => {
  const {page=0,pageSize=9} = payload;
  return client.get(`blog?page=${page}&pageSize=${pageSize}`).then(res => res.data);
}

export const insertBlogApi = (payload:any) => {
  return client.post('blog',payload).then(res => res.data);
}

export const updateBlogApi = (payload:any) => {
  return client.put('blog',payload).then(res => res.data);
}

export const duplicateBlogApi = (payload:any) => {
  return client.post('blog/duplicate',payload).then(res => res.data);
}

export const deleteBlogApi = (id:any) => {
  return client.delete(`blog/${id}`).then(res => res.data);
}

export const getListBlogCommentApi = (payload:any) => {
  const { blog_id } = payload;
  return client.get(`blog-comment-by-blog?blog_id=${blog_id}&status=-1`).then(res => res.data);
}

export const updateStatusCommentAPI = (payload:any) => {
  return client.put(`comment-update-status`,payload).then(res => res.data);
}
