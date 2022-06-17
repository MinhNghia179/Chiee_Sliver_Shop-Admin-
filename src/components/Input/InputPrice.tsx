import { DatePicker, InputNumber, Space } from 'antd';
import moment from 'moment';
import React, { useCallback, useMemo } from 'react';

const { RangePicker } = DatePicker;

interface IProps {
  valuePrice: number;
  valuePromotionPrice: number;
  valuePromotionTimeStart: string;
  valuePromotionTimeEnd: string;
  handleChangeValue: (type: string, value: any) => void;
}

const InputPrice = (props: IProps) => {
  const {
    valuePrice,
    valuePromotionPrice,
    valuePromotionTimeStart,
    valuePromotionTimeEnd,
    handleChangeValue,
  } = props;

  const changePromotionTime = (value: any, dateString: any) => {
    handleChangeValue('promotion_time_start', value ? dateString[0] : value);
    handleChangeValue('promotion_time_end', value ? dateString[1] : value);
  };

  return (
    <div className="mb-3">
      <label className="mb-2">
        <strong>
          Giá sản phẩm (VND) <span className="text-danger"> * </span>
        </strong>
      </label>
      <div className="d-flex justify-content-between">
        <div>
          <label>Giá bán thường</label>
          <br />
          <InputNumber
            min={1}
            style={{ width: 200 }}
            onChange={(value) => handleChangeValue('price', value)}
            value={valuePrice}
          />
        </div>
        <div className="pl-4">
          <label>Giá khuyến mãi</label>
          <br />
          {valuePromotionPrice !== -1 ? (
            <InputNumber
              min={1}
              style={{ width: 200 }}
              value={valuePromotionPrice}
              onChange={(value) => handleChangeValue('promotion_price', value)}
            />
          ) : (
            <InputNumber
              min={1}
              style={{ width: 200 }}
              onChange={(value) => handleChangeValue('promotion_price', value)}
            />
          )}
        </div>
        <div>
          <label>Thời gian khuyến mãi</label>
          <br />
          <Space direction="vertical" size={12}>
            {valuePromotionTimeStart && valuePromotionTimeEnd ? (
              <RangePicker
                defaultValue={[
                  moment(valuePromotionTimeStart),
                  moment(valuePromotionTimeEnd),
                ]}
                onChange={changePromotionTime}
              />
            ) : (
              <RangePicker onChange={changePromotionTime} />
            )}
          </Space>
        </div>
      </div>
    </div>
  );
};

export default InputPrice;
