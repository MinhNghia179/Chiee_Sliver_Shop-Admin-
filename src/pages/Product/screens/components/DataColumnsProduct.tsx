import ActionProductItem from './ActionProductItem';
import HistoryProductItem from './HistoryProductItem';
import ImageProductItem from './ImageProductItem';
import PromotionPriceProductItem from './PromotionPriceIProducttem';
import StatusProductItem from './StatusProductItem';
import WarehouseProductItem from './WarehouseProductItem';
import { ProductModel } from 'pages/Product/models/ProductModel';
import { formatMoney } from 'utils';

export const columnsProduct = [
  {
    title: 'Tên sản phẩm',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Giá',
    dataIndex: 'price',
    key: 'price',
    width: 150,
    sorter: (a: any, b: any) => a.price - b.price,
    render: (price: number) => <span>{formatMoney(price)}</span>,
  },
  {
    title: 'Giá khuyến mãi',
    dataIndex: 'promotion',
    key: 'promotion',
    render: (item: ProductModel) => <PromotionPriceProductItem data={item} />,
  },
  {
    title: 'Danh mục',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Hoạt động',
    dataIndex: 'history',
    key: 'history',
    render: (item: ProductModel) => <HistoryProductItem data={item} />,
  },
  {
    title: 'Ảnh',
    dataIndex: 'image',
    key: 'image',
    width: 150,
    render: (list_image: string) => (
      <ImageProductItem list_image={list_image} />
    ),
  },
  {
    title: 'Kho',
    dataIndex: 'warehouse',
    key: 'warehouse',
    width: 70,
    render: (properties: any) => (
      <WarehouseProductItem properties={properties} />
    ),
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    width: 100,
    render: (status: boolean) => <StatusProductItem status={status} />,
  },
  {
    title: 'Hành động',
    dataIndex: 'action',
    key: 'action',
    width: 300,
    render: (item: ProductModel) => <ActionProductItem data={item} />,
  },
];
