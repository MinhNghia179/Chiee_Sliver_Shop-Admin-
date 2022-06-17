import { Comment, Tooltip, List, Switch, Rate }           from "antd";
import moment                                             from "moment";
import React, { useEffect, useState }                     from "react";
import { useDispatch }                                    from "react-redux";

import { AVATAR_DEFAULT }                                 from "config/constants";
import { ProductReviewModel }                             from "pages/Product/models/ProductReviewModel";
import { getListReviewAction, updateStatusReviewAction }  from "pages/Product/redux/ProductActions";

interface IProps{
  product_id:number
}

const ProductReview = ({product_id}:IProps) => {
  const dispatch = useDispatch();
  const [data,setData] = useState([]);
  const [totalReview,setTotalReview] = useState(0);

  useEffect(() => {
    dispatch(getListReviewAction(product_id,(dataReview:any)=>{
      setTotalReview(dataReview.total||0);
      const dataProductReview = dataReview.results.map((item:ProductReviewModel) => {
        return {
          actions: [
            <span key="comment-list-reply-to-0">
              <Switch
                checkedChildren="Hiển thị"
                unCheckedChildren="Ẩn"
                defaultChecked={item.status}
                onChange={value => handleChangeStatus(value,item)}
              />
            </span>,
          ],
          author: item.last_name || "_ _ _" + " "+ item.last_name || "_ _ _",
          avatar: item.avatar || AVATAR_DEFAULT,
          content: (
            <>
              <Rate allowHalf defaultValue={item.rate} disabled/>
              <p>
                {item.comment}
              </p>
            </>
          ),
          datetime: (
            <Tooltip
              title={moment(item.created_at).subtract(1, "days").format("YYYY-MM-DD HH:mm:ss")}
            >
              <span>{moment(item.created_at).subtract(1, "days").fromNow()}</span>
            </Tooltip>
          ),
        }
      });
      setData(dataProductReview)
    }))
  }, []);

  const handleChangeStatus = (status:boolean,dataEdit:ProductReviewModel) => {
    const payload = {
      id:dataEdit.id,
      status:status
    }
    
    dispatch(updateStatusReviewAction(payload))
  }

  return (
    <>
      <List
        className="comment-list"
        header={`${totalReview} Đánh giá`}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item:any) => (
          <li>
            <Comment
              actions={item.actions}
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
            />
          </li>
        )}
      />
    </>
  );
};

export default React.memo(ProductReview);
