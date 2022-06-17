import { 
  Button, Col, Divider, Modal, Row 
}                                         from "antd";
import React, { useEffect, useState }     from "react";
import { useDispatch }                    from "react-redux";

import { OrderModel }                     from "pages/Order/models/OrderModel";
import { convertDateTime, getStatusName } from "utils";
import ProductOrder                       from "./ProductOrder";
import { ORDER_STATUS }                   from "config/constants";
import { OrderStatusModel }               from "pages/Order/models/OrderStatusModel";
import { 
  createOrderStatusAction, 
  getListOrderAction 
}                                         from "pages/Order/redux/OrderActions";
interface IProps{
  visible     :boolean;
  orderData   :OrderModel;
  onClose     :() => void;
}

const OrderDetailModal = (props:IProps) => {
  const dispatch = useDispatch();
  const {visible, orderData, onClose} = props;
  const [nextStatus,setNextStatus] = useState<any>({});
  const currentStatus:OrderStatusModel = orderData.order_status[0];

  const getTextBtnStatus = () => {
    switch (currentStatus.status_code) {
      case ORDER_STATUS.WAIT_CONFIRM.CODE:
        setNextStatus(ORDER_STATUS.CONFIRM);
        break;
      case ORDER_STATUS.CONFIRM.CODE:
        setNextStatus(ORDER_STATUS.DELIVERY);
        break;
      case ORDER_STATUS.DELIVERY.CODE:
        setNextStatus(ORDER_STATUS.SUCCESSFUL_DELIVERY);
        break;
    }
  }

  useEffect(() => {
    getTextBtnStatus();
  }, [orderData]);

  const handleCancelOrder = () => {
    const payload:OrderStatusModel = {
      order_id:orderData.id,
      status_code:ORDER_STATUS.CANCEL.CODE,
      created_at:(new Date()).toString(),
    }
    dispatch(createOrderStatusAction(payload,(success:boolean)=>{
      if(success){
        dispatch(getListOrderAction());
      }
    }))
  }

  const handleChangeNextStatus = () => {
    const payload:OrderStatusModel = {
      order_id:orderData.id,
      status_code:nextStatus?.CODE || '',
      created_at:(new Date()).toString(),
    }
    dispatch(createOrderStatusAction(payload,(success:boolean)=>{
      if(success){
        dispatch(getListOrderAction());
      }
    }))
  }

  return (
    <Modal
      title="Chi tiết đơn hàng"
      visible={visible}
      onCancel={onClose}
      footer={false}
      centered
      width={1000}
      className='order_detail_modal'
    >
      <Row gutter={16}>
        <Col span={12}>
          <h5 className="mb-3">Thông tin nhận hàng</h5>
          <table>
          <tr>
              <td><b>Họ tên</b></td>
              <td>&nbsp;:&emsp;</td>
              <td>{orderData.recipient_name}</td>
            </tr>
            <tr>
              <td><b>Số điện thoại</b></td>
              <td>&nbsp;:&emsp;</td>
              <td>{orderData.recipient_phone}</td>
            </tr>
            <tr>
              <td><b>Địa chỉ</b></td>
              <td>&nbsp;:&emsp;</td>
              <td>{orderData.recipient_address}</td>
            </tr>
          </table>
        </Col>
        <Col span={12}>
          <div className="d-flex justify-content-between mb-3">
             <h5>Trạng thái đơn hàng</h5>
             <div>
               <Button disabled={currentStatus.status_code === ORDER_STATUS.SUCCESSFUL_DELIVERY.CODE} onClick={handleChangeNextStatus}>{nextStatus?.NAME}</Button>
               {"   "}
               <Button 
                danger 
                disabled={currentStatus.status_code !== ORDER_STATUS.WAIT_CONFIRM.CODE}
                onClick={handleCancelOrder}
              >Hủy đơn</Button>
             </div>
          </div>
          <ul className="list_status">
            {orderData.order_status.map(item => <li>{convertDateTime(item.created_at)} - {getStatusName(item.status_code)}</li>)}
          </ul>
        </Col>
      </Row>
      <Divider orientation='left' plain><h5>Sản phẩm</h5></Divider>
      {
        orderData.order_details.map((item, index)=> <ProductOrder key={index} dataOrderDetail={item}/> )
      }
    </Modal>
  );
}

export default React.memo(OrderDetailModal);
