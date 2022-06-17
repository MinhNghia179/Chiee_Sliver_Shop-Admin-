import { Empty }                    from "antd";
import { useEffect, useState }      from "react";
import { useDispatch }              from "react-redux";

import { ListBlogCommentModel }     from "pages/Blog/models/BlogCommentModel";
import { getListBlogCommentAction } from "pages/Blog/redux/BlogActions";
import ListComment                  from "./ListComment";

interface IProps {
  blog_id: number;
}

const BlogCommentList = ({ blog_id }: IProps) => {
  const dispatch = useDispatch();
  const [data, setData] = useState<ListBlogCommentModel | null>(null);

  useEffect(() => {
    if (blog_id) {
      const payload = {
        blog_id,
      };
      dispatch(
        getListBlogCommentAction(payload, (data: ListBlogCommentModel) => {
          setData(data);
        })
      );
    }
  }, [blog_id]);

  return <>{data?.total ?<><ListComment data={data} setData={setData}/></>  : <Empty />}</>;
};

export default BlogCommentList;
