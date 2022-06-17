import { FeedbackModel } from "../models/FeedbackModel";
import ActionFeedbackItem from "./ActionFeedbackItem";

export const columnsFeedback = [
  {
    title: "Họ tên",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Tiêu đề",
    dataIndex: "subject",
    key: "subject",
  },
  {
    title: "Ngày gửi",
    dataIndex: "created_at",
    key: "created_at",
  },
  {
    title: "Hành động",
    dataIndex: "action",
    key: "action",
    width:150,
    render: (item:FeedbackModel) => <ActionFeedbackItem data={item}/>
  }
]