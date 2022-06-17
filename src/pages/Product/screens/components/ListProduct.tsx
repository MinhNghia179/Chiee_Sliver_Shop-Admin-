import { useCallback, useEffect, useState } from 'react';
import { Table } from 'antd';

import { columnsProduct } from './DataColumnsProduct';
import { useSelector } from 'setup';
import { ProductModel } from 'pages/Product/models/ProductModel';

const ListProduct = () => {
  const [data, setData] = useState<any[]>([]);
  const products = useSelector((state) => state.product.ListProduct);
  const dataCategories = useSelector((state) => state.product.DataCategories);

  const getCategoryName = useCallback((category_id: number) => {
    const result = (dataCategories || []).find(
      (element) => element.value === category_id
    );

    return result.label || '';
  }, []);

  useEffect(() => {
    let dataFormat: any[] = (products.results || []).map(
      (item: ProductModel) => {
        return {
          key: item.id,
          category: getCategoryName(item.category_id),
          image: item.list_image,
          name: item.name,
          price: item.price,
          promotion: item,
          history: item,
          warehouse: JSON.parse(item.properties || '[]'),
          status: item.status,
          action: item,
        };
      }
    );
    setData(dataFormat || []);
  }, [products]);

  return (
    <>
      <Table
        columns={columnsProduct}
        dataSource={data}
        pagination={false}
        scroll={{ x: 1500, y: 680 }}
      />
    </>
  );
};

export default ListProduct;
