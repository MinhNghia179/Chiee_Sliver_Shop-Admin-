import { Tabs } from "antd";

const { TabPane } = Tabs;

interface IProps {
  getTabFilter: (key: string) => void;
}

const FilterOrder = ({ getTabFilter }: IProps) => {
  return (
    <Tabs defaultActiveKey="0" onChange={getTabFilter}>
      <TabPane tab="Tất cả" key="0"></TabPane>
      <TabPane tab="Chờ xác nhận" key="1"></TabPane>
      <TabPane tab="Xác nhận đơn hàng" key="2"></TabPane>
      <TabPane tab="Đang giao" key="3"></TabPane>
      <TabPane tab="Giao hàng thành công" key="4"></TabPane>
      <TabPane tab="Đơn hàng bị hủy" key="5"></TabPane>
    </Tabs>
  );
};

export default FilterOrder;
