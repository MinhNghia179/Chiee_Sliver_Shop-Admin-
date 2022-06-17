import {
  BlogCommentModel,
  ListBlogCommentModel,
}                           from "pages/Blog/models/BlogCommentModel";
import CommentItem          from "./CommentItem";

interface IProps {
  data: ListBlogCommentModel;
  setData : (data:ListBlogCommentModel) => void;
}

const ListComment = ({ data, setData }: IProps) => {

  const changeStatusComment = (item:any) => {
    const listComment = (data.results || []).map(comment => {
      if(comment.id === item.id){
        return {
          ...comment,
          status:item.status
        }
      }
      return comment;
    })
    setData({
      results:[...listComment],
      total:data.total
    })
  }

  return (
    <>
      {(data?.results || []).map((item: BlogCommentModel, index: number) => (
        <CommentItem key={index} item={item} changeStatusComment={changeStatusComment}/>
      ))}
    </>
  );
};

export default ListComment;
