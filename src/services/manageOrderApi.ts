import client from '.';

export const getListOrderAPI = () => {
  return client.get('admin/order').then(res => res.data);
}

export const getOrderDetailAPI = (id:any) => {
  return client.get(`order/${id}`).then(res => res.data);
}

export const createOrderStatusAPI = (payload:any) => {
  return client.post('order-check-status',payload).then(res => res.data);
}

export const getOrderStatisticalAPI = () => {
  return client.get('order-statistical').then(res => res.data);
}

export const getOrderStatusStatisticalAPI = () => {
  return client.get('order-status-statistical').then(res => res.data);
}