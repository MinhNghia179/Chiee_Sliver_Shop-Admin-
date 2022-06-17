import { OrderModel }                   from "pages/Order/models/OrderModel";
import { OrderStatusModel }             from "pages/Order/models/OrderStatusModel";
import { convertDateTime, formatMoney } from "utils";
import ActionOrdersItem                 from "./ActionOrdersItem";
import StatusOrderItem                  from "./StatusOrderItem";

export const columnsOrder = [
  {
    title: 'Tên người nhận',
    dataIndex: 'recipient_name',
    key: 'recipient_name',
  },
  {
    title: 'Ngày',
    dataIndex: 'date',
    key: 'date',
    sorter: (a:any, b:any) => (new Date(a.date).getTime()) - (new Date(b.date).getTime()),
    render:(created_at:string) => convertDateTime(created_at),
  },
  {
    title: 'Tình trạng',
    dataIndex: 'status',
    key: 'status',
    render: (status:OrderStatusModel[]) => <StatusOrderItem status={status}/>
  },
  {
    title: 'Thanh toán',
    dataIndex: 'payment',
    key: 'payment',
    render : () => <span>Thanh toán khi nhận hàng</span>
  },
  {
    title: 'Giao hàng đến',
    dataIndex: 'recipient_address',
    key: 'recipient_address',
  },
  {
    title: 'Tổng tiền',
    dataIndex: 'total_money',
    key: 'total_money',
    sorter: (a:any, b:any) => a.total_money - b.total_money,
    render: (total_money:number) => formatMoney(total_money)
  },
  {
    title: 'Các thao tác',
    dataIndex: 'action',
    key: 'action',
    width:160,
    render:(item:OrderModel)=><ActionOrdersItem orderData={item}/>
  }
];
