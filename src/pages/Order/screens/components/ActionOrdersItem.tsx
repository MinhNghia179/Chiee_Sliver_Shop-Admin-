import { Button, Tooltip }          from "antd";
import {
  EyeOutlined, FilePdfOutlined,
}                                   from "@ant-design/icons";
import { useState }                 from "react";

import OrderDetailModal             from "./OrderDetailModal";
import { OrderModel } from "pages/Order/models/OrderModel";

interface IProps{
  orderData:OrderModel
}

const ActionOrdersItem = ({orderData}:IProps) => {
  const [isOpenOrderDetail,setIsOpenOrderDetail] = useState<boolean>(false);

  const handleOpenOrderDetail = () => setIsOpenOrderDetail(true);
  const handleCloseOrderDetail = () => setIsOpenOrderDetail(false);

  return (
    <>
      <div className="d-flex justify-content-around">
        <Tooltip placement="bottom" title="Xem sản phẩm">
          <Button type="text" onClick={handleOpenOrderDetail}>
            <EyeOutlined style={{ fontSize: 20 }} />
          </Button>
        </Tooltip>
        <Tooltip placement="bottom" title="Xuất hóa đơn - Excel">
          <Button type="text">
            <FilePdfOutlined style={{ fontSize: 20 }} />
          </Button>
        </Tooltip>
      </div>
      <OrderDetailModal visible={isOpenOrderDetail} orderData={orderData} onClose={handleCloseOrderDetail}/>
    </>
  );
};

export default ActionOrdersItem;
