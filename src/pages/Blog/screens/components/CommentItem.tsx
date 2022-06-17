import { Avatar, Image, Switch }        from "antd";
import { useDispatch }                  from "react-redux";

import { NO_IMAGE }                     from "config/constants";
import { BlogCommentModel }             from "pages/Blog/models/BlogCommentModel";
import { updateStatusCommentAction }    from "pages/Blog/redux/BlogActions";
import { convertDateTime, getFullName } from "utils";

interface IProps {
  item: BlogCommentModel;
  changeStatusComment :(item:any) => void;
}

const CommentItem = ({ item, changeStatusComment }: IProps) => {
  const dispatch = useDispatch();
  
  const onChangeStatus = (checked: boolean) => {
    const payload = {
      id:item.id,
      status:checked
    }
    dispatch(updateStatusCommentAction(payload,() => {
      changeStatusComment({id:item.id,status:!item.status})
    }))
  };

  return (
    <div className="d-flex mb-4">
      <Avatar src={<Image src={item.user_avatar || NO_IMAGE} />} size={70} />
      <div className="flex-grow-1" style={{ marginLeft: 10 }}>
        <div className="d-flex justify-content-between">
          <b>{getFullName(item.user_first_name, item.user_last_name)}</b>
          <div>
            <Switch
              checkedChildren="HIển thị"
              unCheckedChildren="Ẩn"
              checked={item.status}
              onChange={onChangeStatus}
            />
          </div>
        </div>
        <div className="text-secondary">{convertDateTime(item.created_at)}</div>
        <div>{item.content}</div>
      </div>
    </div>
  );
};

export default CommentItem;
