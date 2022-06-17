import { Tag } from "antd";

interface IProps {
  status: boolean;
}

const StatusBlogItem = ({ status }: IProps) => {
  if (status) return <Tag color="green">Hiển thị</Tag>;

  return <Tag color="red">Ẩn</Tag>;
};

export default StatusBlogItem;
