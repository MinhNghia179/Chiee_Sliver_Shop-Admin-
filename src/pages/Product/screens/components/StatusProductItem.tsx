import { Tag } from "antd";

interface IProps {
  status: boolean;
}

const StatusProductItem = ({ status }: IProps) => {
  return (
    <>
      {status ? <Tag color="green">Hiển thị</Tag> : <Tag color="red">Ẩn</Tag>}
    </>
  );
};

export default StatusProductItem;
