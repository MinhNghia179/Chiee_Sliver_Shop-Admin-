import { Divider, Modal, Tabs, Tag } from 'antd';
import parse from 'html-react-parser';
import { ProductImagesModel } from 'pages/Product/models/ProductImagesModel';
import { ProductModel } from 'pages/Product/models/ProductModel';
import React, { useEffect, useState } from 'react';
import ShowMore from 'react-show-more-button';
import { formatMoney } from 'utils';
import ProductReview from './ProductReview';
import PromotionPriceProductItem from './PromotionPriceIProducttem';
const { TabPane } = Tabs;
interface IProps {
  title: string;
  visible: boolean;
  data: ProductModel;
  onCancel: () => void;
}

const PreviewProductModal = (props: IProps) => {
  const { title, visible, data, onCancel } = props;
  const [dataImage, setDataImage] = useState<ProductImagesModel[]>([]);

  const [imageRight, setImageRight] = useState('');

  const [isSeeMoreProductDescription, setSeeMoreProductDescription] =
    useState<boolean>(true);

  useEffect(() => {
    setDataImage(JSON.parse(data.list_image || '[]'));
    setImageRight(dataImage[0]?.url);
  }, [visible]);

  const renderImages = () => {
    return (
      <>
        <div className="list-gallery">
          {dataImage.map((image, index) => {
            return (
              <>
                <img
                  key={index}
                  className={
                    image.url === imageRight
                      ? 'gallery-image active'
                      : 'gallery-image'
                  }
                  width={140}
                  height={140}
                  style={{ objectFit: 'cover' }}
                  src={image.url}
                  alt=""
                  onClick={() => setImageRight(image?.url)}
                />
              </>
            );
          })}
        </div>
      </>
    );
  };

  const handleChangeSeeMoreDescription = (showValue: boolean) => {
    setSeeMoreProductDescription(showValue);
  };

  return (
    <>
      <Modal
        title={title.toUpperCase()}
        centered
        visible={visible}
        onCancel={onCancel}
        width={1500}
        footer={null}
        style={{ margin: '50px 0' }}
      >
        <div className="row product-item">
          <div className="col-md-5">
            <div style={{ width: '100%' }}>
              <img src={imageRight} alt="" width={'100%'} />
            </div>
          </div>
          <div className="col-md-7">
            <h3>{data.name} </h3>
            <Divider />
            <Tag color={data.status ? 'green' : 'red'}>
              {data.status ? 'Hiển Thị' : 'Ẩn'}
            </Tag>
            <Divider />
            <p className="info" id="price">
              Giá: {formatMoney(data.price)}
            </p>
            <Divider />
            <p className="info" id="promotion-price">
              <span>Giá Khuyến Mãi:</span>
              <PromotionPriceProductItem data={data} colorDate="coral" />
            </p>
            <Divider />
            <div className="info">
              <p>
                <h6>Mô tả ngắn:</h6>
                {parse(data.short_description || 'Không có mô tả')}
              </p>
            </div>
            <Divider />
            <div style={{ display: 'flex' }}>{renderImages()}</div>
          </div>
        </div>
        <div className="row">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Chi tiết sản phẩm" key="1">
              <ShowMore
                defaultAnchor={isSeeMoreProductDescription}
                maxHeight={150}
                button={
                  <button className="btn-see-more">
                    {isSeeMoreProductDescription ? 'Xem thêm' : 'Ẩn bớt'}
                  </button>
                }
                onChange={handleChangeSeeMoreDescription}
              >
                {parse(data.description || '_ _ _')}
              </ShowMore>
            </TabPane>
            <TabPane tab="Đánh giá" key="2">
              <ProductReview product_id={data.id} />
            </TabPane>
          </Tabs>
        </div>
      </Modal>
    </>
  );
};

export default React.memo(PreviewProductModal);
