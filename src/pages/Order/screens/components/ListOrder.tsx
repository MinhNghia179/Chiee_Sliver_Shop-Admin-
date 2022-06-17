import { Table } from 'antd';
import { useEffect, useState } from 'react';

import LoadingTable from 'components/LoadingTable';
import { useSelector } from 'setup';
import { columnsOrder } from './DataColumnsOrder';
import FilterOrder from './FilterOrder';
import { OrderModel } from 'pages/Order/models/OrderModel';
import { ORDER_STATUS } from 'config/constants';

const ListOrder = () => {
  const loading = useSelector((state) => state.common.loading);
  const orders = useSelector((state) => state.order.ListOrder);
  const [dataTableOrder, setDataTableOrder] = useState<any[]>([]);

  useEffect(() => {
    convertDataOrder(orders.results);
  }, [orders]);

  const convertDataOrder = (listOrder: OrderModel[]) => {
    const formatDataOrder = listOrder.map((item) => {
      return {
        key: item.id,
        recipient_name: item.recipient_name,
        date: item.order_status[0].created_at,
        status: item.order_status,
        recipient_address: item.recipient_address,
        total_money: item.total_payment,
        action: item,
      };
    });
    setDataTableOrder(formatDataOrder);
  };

  const getTabFilter = (key: string) => {
    const tab = Number(key);
    const dataOrder = orders.results.filter((item: OrderModel) =>
      filterStatus(tab, item)
    );
    convertDataOrder(dataOrder);
  };

  const filterStatus = (valueTab: number, item: OrderModel) => {
    const status = item.order_status.map((element) => element.status_code);
    if (valueTab === 0) return true;
    if (
      status.length === 1 &&
      valueTab === 1 &&
      status.includes(ORDER_STATUS.WAIT_CONFIRM.CODE)
    )
      return true;
    if (
      status.length === 2 &&
      valueTab === 2 &&
      status.includes(ORDER_STATUS.CONFIRM.CODE)
    )
      return true;
    if (
      status.length === 2 &&
      valueTab === 5 &&
      status.includes(ORDER_STATUS.CANCEL.CODE)
    )
      return true;
    if (
      status.length === 3 &&
      valueTab === 3 &&
      status.includes(ORDER_STATUS.DELIVERY.CODE)
    )
      return true;
    if (
      status.length === 4 &&
      valueTab === 4 &&
      status.includes(ORDER_STATUS.SUCCESSFUL_DELIVERY.CODE)
    )
      return true;
    return false;
  };

  return (
    <>
      {loading ? (
        <LoadingTable />
      ) : (
        <>
          <FilterOrder getTabFilter={getTabFilter} />
          <Table
            dataSource={dataTableOrder}
            columns={columnsOrder}
            scroll={{ x: 1500, y: 680 }}
          />
        </>
      )}
    </>
  );
};

export default ListOrder;
