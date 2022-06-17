import { Button } from 'antd';
import { ProductColorModel } from 'pages/Product/models/ProductPropertiesModel';
import { useState } from 'react';
import { Table } from 'reactstrap';
import ItemPropertyColor from './components/ItemProperty';
import PropertiesModal from './components/PropertiesModal';
import './product-property.style.scss';

interface IProps {
  properties: any[];
  setProperties: (type: 'ADD' | 'EDIT' | 'DELETE', item: any) => void;
}

const ProductProperty = ({ properties, setProperties }: IProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleAddProperty = (item: ProductColorModel) => {
    setProperties('ADD', item);
  };

  const handleDeleteProperty = (item: ProductColorModel) => {
    setProperties('DELETE', item);
  };

  const handleEditProperty = (item: ProductColorModel) => {
    setProperties('EDIT', item);
  };

  return (
    <>
      <div className="mb-3 ">
        <label className="mb-2">
          <strong>Thuộc tính sản phẩm</strong>
        </label>
        <br />
        <Button onClick={showModal}>Thêm thuộc tính</Button>
        {!!properties.length && (
          <div className="mt-2">
            <Table bordered>
              <thead>
                <tr>
                  <td>Màu</td>
                  <td>Kích thước</td>
                  <td>Số lượng</td>
                  <td>Hành động</td>
                </tr>
              </thead>
              <tbody>
                {properties.map((item, index) => (
                  <ItemPropertyColor
                    data={item}
                    key={index}
                    handleDeleteProperty={() => handleDeleteProperty(item)}
                    handleEditProperty={handleEditProperty}
                  />
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>
      {isModalVisible && (
        <PropertiesModal
          isModalVisible={isModalVisible}
          handleCancel={handleCancel}
          handleAddProperty={handleAddProperty}
        />
      )}
    </>
  );
};

export default ProductProperty;
