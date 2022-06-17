import { Table } from 'antd';
import { useEffect, useState } from 'react';

import { ProductCategoryModel } from 'pages/ProductCategory/models/ProductCategoryModel';
import { useSelector } from 'setup';
import { columnsProductCategory } from './DataColumnsProductCategory';

const ListProductCategory = () => {
  const productCategory = useSelector(
    (state) => state.productCategory.ListCategory
  );
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const dataFormat = productCategory.results.map(
      (item: ProductCategoryModel) => {
        return {
          key: item.id,
          thumbnail: item.thumbnail,
          category_name: item.name,
          code: item.code,
          status: item.status,
          action: item,
        };
      }
    );

    setData(dataFormat);
  }, [productCategory]);

  return (
    <>
      <Table
        columns={columnsProductCategory}
        dataSource={data}
        scroll={{ x: 1500, y: 680 }}
      />
    </>
  );
};

export default ListProductCategory;
