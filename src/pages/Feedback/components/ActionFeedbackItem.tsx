import { Button, Popconfirm, Tooltip } from "antd";
import { FeedbackModel } from "../models/FeedbackModel";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteFeedbackAction, setListFeedbackAction, updateStatusFeedbackAction } from "../redux/FeedbackActions";
import { useSelector } from "setup";
import FeedbackDetailModal from "./FeedbackDetailModal";

interface IProps {
  data: FeedbackModel;
}

const ActionFeedbackItem = ({ data }: IProps) => {
  const dispatch = useDispatch();
  const [isShowFeedbackDetail, setIsShowFeedbackDetail] = useState(false);
  const feedbacks = useSelector(state => state.feedback.ListFeedback);

  const handleOpenFeedbackDetail = () => {
    setIsShowFeedbackDetail(true);
    if(!data.status){
      dispatch(updateStatusFeedbackAction({id:data.id},() => {
        updateStatus();
      }))
    }
    
  }
  const handleCloseFeedbackDetail = () => setIsShowFeedbackDetail(false);

  const confirm = () => {
    return new Promise((resolve: any) => {
      dispatch(deleteFeedbackAction(data.id,(status:boolean) => {
        if(status){
          removeItem();
        }
        resolve();
      }));
    });
  };

  const removeItem = () => {
    const newFeedbacks = feedbacks.results.filter((item:FeedbackModel) => item.id !== data.id);
    
    dispatch(setListFeedbackAction({
      results:newFeedbacks,
      total:newFeedbacks.length
    }))
  }

  const updateStatus = () => {
    const newFeedbacks = feedbacks.results.map((item:FeedbackModel) => {
      if(item.id === data.id){
        return{
          ...item,
          status:1,
        }
      }
      return item;
    });
    
    dispatch(setListFeedbackAction({
      results:newFeedbacks,
      total:newFeedbacks.length
    }))
  }

  return (
    <>
      <div className="d-flex justify-content-around">
        <Tooltip placement="bottom" title="Xem chi tiết phản hồi">
          <Button type="text" onClick={handleOpenFeedbackDetail}>
            <EyeOutlined style={{ fontSize: 20 }} />
          </Button>
        </Tooltip>
        <Popconfirm
          title="Xác nhận xóa phản hồi này"
          onConfirm={confirm}
          onVisibleChange={() => console.log("visible change")}
          okText="Xóa"
          cancelText="Hủy"
          placement="topRight"
        >
          <Tooltip placement="bottom" title="Xóa phản hồi">
            <Button danger type="text">
              <DeleteOutlined style={{ fontSize: 20 }} />
            </Button>
          </Tooltip>
        </Popconfirm>
      </div>
      <FeedbackDetailModal visible={isShowFeedbackDetail} data={data} onClose={handleCloseFeedbackDetail}/>
    </>
  );
};

export default ActionFeedbackItem;
