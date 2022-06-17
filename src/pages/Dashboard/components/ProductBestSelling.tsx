import { Card, Image } from 'antd';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'setup';
import { ProductBestSellingModel } from '../models/ProductBestSelling';

import { getProductBestSellingAction } from '../redux/DashboardActions';

const ProductBestSelling = () => {
  const dispatch = useDispatch();
  const productBestSelling = useSelector(
    (state) => state.dashboard.ListProductBestSelling
  );

  useEffect(() => {
    dispatch(getProductBestSellingAction());
  }, []);

  const renderData = useMemo(() => {
    return productBestSelling.map(
      (item: ProductBestSellingModel, index: number) => (
        <div className="my-4">
          <tr key={index}>
            <td>
              <Image src={item.image || ''} width={100} height={100} />
            </td>
            <td>
              <h6 className="mx-4">{item.product_name}</h6>
            </td>
          </tr>
        </div>
      )
    );
  }, [productBestSelling]);

  return (
    <div className="col-md-12">
      <Card>
        <h4 className="mb-4">Sản phẩm mua nhiều</h4>
        {/* <div className=" product-best-selling">
          <table>{renderData}</table>
        </div> */}
      </Card>
    </div>
  );
};

export default ProductBestSelling;
