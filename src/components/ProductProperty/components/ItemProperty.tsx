import { ProductColorModel } from 'pages/Product/models/ProductPropertiesModel';
import { useState } from 'react';
import PropertiesModal from './PropertiesModal';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Tooltip } from 'antd';

interface IProps {
  data: ProductColorModel;
  handleDeleteProperty: () => void;
  handleEditProperty: (item: ProductColorModel) => void;
}

const ItemPropertyColor = ({
  data,
  handleDeleteProperty,
  handleEditProperty,
}: IProps) => {
  const sizes = data.sizes || [];
  const [isModalVisibleProperty, setIsModalVisibleProperty] = useState(false);

  const showModal = () => {
    setIsModalVisibleProperty(true);
  };

  const handleCancel = () => {
    setIsModalVisibleProperty(false);
  };

  const confirm = () => {
    handleDeleteProperty();
  };

  return (
    <>
      <tr>
        <td rowSpan={!sizes.length ? 1 : sizes.length}>{data.color_name}</td>

        {!!sizes.length ? (
          <>
            <td>{sizes[0].size_name}</td>
            <td>{sizes[0].amount}</td>
          </>
        ) : (
          <>
            <td>_ _ _</td>
            <td>{data.amount}</td>
          </>
        )}
        <td rowSpan={!sizes.length ? 1 : sizes.length}>
          <Tooltip placement="top" title="Cập nhật thuộc tính">
            <Button type="text" onClick={showModal}>
              <EditOutlined />
            </Button>
          </Tooltip>
          <Popconfirm
            placement="topLeft"
            title="Xác nhận xóa thuộc tính"
            onConfirm={confirm}
            okText="Đồng ý"
            cancelText="Hủy"
          >
            <Tooltip placement="top" title="Xóa thuộc tính">
              <Button type="text" danger>
                <DeleteOutlined />
              </Button>
            </Tooltip>
          </Popconfirm>
        </td>
      </tr>
      {sizes.length > 1 &&
        sizes.map((item: any, index: number) => {
          if (index === 0) return;
          return (
            <tr>
              <td>{item.size_name}</td>
              <td>{item.amount}</td>
            </tr>
          );
        })}

      {isModalVisibleProperty && (
        <PropertiesModal
          isModalVisible={isModalVisibleProperty}
          handleCancel={handleCancel}
          handleAddProperty={handleEditProperty}
          data={data}
        />
      )}
    </>
  );
};

export default ItemPropertyColor;
