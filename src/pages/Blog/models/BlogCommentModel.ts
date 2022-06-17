export interface BlogCommentModel {
  id              : number;
  user_id         : number;
  blog_id         : number;
  content         : string;
  created_at      : string;
  modified_at     : string;
  status          : boolean;
  user_first_name :string;
  user_last_name  :string;
  user_avatar     :string;
}

export interface ListBlogCommentModel{
  results : BlogCommentModel[];
  total   : number;
}