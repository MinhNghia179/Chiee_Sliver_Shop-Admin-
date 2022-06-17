import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select } from 'antd';
import { useMemo, useState } from 'react';

import { useSelector } from 'setup';
import EditProductModal from './EditProductModal';

const { Option } = Select;

interface IProps {
  data: any;
  handleSearch: () => void;
  changeValue: (type: string, item: any) => void;
}

const FilterProduct = ({ data, handleSearch, changeValue }: IProps) => {
  const categories = useSelector((state) => state.product.DataCategories);
  const [isShowEditProduct, setIsShowProduct] = useState(false);

  const handleOpenEditProduct = () => setIsShowProduct(true);

  const handleCloseEditProduct = () => setIsShowProduct(false);

  const renderProductCategories = useMemo(() => {
    return (categories || []).map((item, index) => (
      <Option key={index} value={item.value}>
        {item.label}
      </Option>
    ));
  }, [categories]);

  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <Input
          placeholder="Tìm kiếm theo tên sản phẩm"
          allowClear
          onChange={(event) => changeValue('query', event.target.value)}
          style={{ width: 300 }}
        />
        &ensp;
        <Select
          showSearch
          placeholder="Chọn danh mục sản phẩm"
          onChange={(value) => changeValue('category_id', value)}
          allowClear
          style={{ width: 220 }}
        >
          {renderProductCategories}
        </Select>
        &ensp;
        <Select
          showSearch
          placeholder="Giá sản phẩm"
          allowClear
          onChange={(value) => changeValue('order_by', value || '')}
          style={{ width: 220 }}
        >
          <Option value="price ASC">Giá tăng dần</Option>
          <Option value="price DESC">Giá giảm dần </Option>
        </Select>
        &ensp;
        <Select
          showSearch
          placeholder="Trạng thái"
          allowClear
          onChange={(value) => changeValue('status', value)}
          style={{ width: 150 }}
        >
          <Option value="1">Hiển thị</Option>
          <Option value="0">Ẩn</Option>
        </Select>
        &ensp;
        <Button type="primary" icon={<SearchOutlined />} onClick={handleSearch}>
          Tìm kiếm
        </Button>
      </div>
      <div>
        <Button onClick={handleOpenEditProduct}>Thêm sản phẩm</Button>
      </div>
      {isShowEditProduct && (
        <EditProductModal
          title="Thêm sản phẩm mới"
          visible={isShowEditProduct}
          onCancel={handleCloseEditProduct}
        />
      )}
    </div>
  );
};

export default FilterProduct;
