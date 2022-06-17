import { ProductModel } from 'pages/Product/models/ProductModel';
import { convertDate, formatMoney } from 'utils';

interface IProps {
  data: ProductModel;
  colorDate?: string;
}

const PromotionPriceProductItem = ({ data, colorDate }: IProps) => {
  const { promotion_time_start, promotion_time_end, promotion_price } = data;

  return (
    <>
      <div style={{ marginLeft: '10px' }}>
        {promotion_price && formatMoney(promotion_price)}
      </div>
      {promotion_time_start && promotion_time_end && (
        <div style={{ marginLeft: '10px', color: colorDate || '' }}>
          <b>Từ ngày: </b>{' '}
          <span>
            {convertDate(promotion_time_start || '')} -{' '}
            {convertDate(promotion_time_end || '')}
          </span>
        </div>
      )}
    </>
  );
};

export default PromotionPriceProductItem;
