import {
  CopyOutlined,
  DeleteOutlined,
  EyeOutlined,
  FormOutlined,
} from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import { ProductModel } from 'pages/Product/models/ProductModel';
import {
  deleteProductAction,
  duplicateProductAction,
  getListProductAction,
} from 'pages/Product/redux/ProductActions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import EditProductModal from './EditProductModal';
import PreviewProductModal from './PreviewProductModal';

interface IProps {
  data: ProductModel;
}

const ActionProductItem = ({ data }: IProps) => {
  const dispatch = useDispatch();

  const [isShowEditProduct, setIsShowProduct] = useState<boolean>(false);
  const [isShowPreviewProduct, setIsShowPreviewProduct] =
    useState<boolean>(false);

  const handleOpenEditProduct = () => setIsShowProduct(true);
  const handleCloseEditProduct = () => setIsShowProduct(false);
  const handleOpenPreviewProduct = () => setIsShowPreviewProduct(true);
  const handleClosePreviewProduct = () => setIsShowPreviewProduct(false);

  const confirmDelete = () => {
    dispatch(
      deleteProductAction(data.id, (result: any) => {
        const payload = {
          page: 0,
          pageSize: 10,
        };
        dispatch(getListProductAction(payload));
      })
    );
  };

  const handleDuplicateProduct = () => {
    const payload = {
      id: data.id || 0,
    };
    dispatch(
      duplicateProductAction(payload, (result: any) => {
        const payload = {
          page: 0,
          pageSize: 10,
        };
        dispatch(getListProductAction(payload));
      })
    );
  };
  return (
    <>
      <div className="d-flex justify-content-around">
        <Button
          type="text"
          title="Xem sản phẩm"
          onClick={handleOpenPreviewProduct}
        >
          <EyeOutlined style={{ fontSize: 20 }} />
        </Button>
        <Button
          type="text"
          onClick={handleDuplicateProduct}
          title="Nhân bản sản phẩm"
        >
          <CopyOutlined style={{ fontSize: 20 }} />
        </Button>
        <Button
          type="text"
          onClick={handleOpenEditProduct}
          title="Cập nhật sản phẩm"
        >
          <FormOutlined style={{ fontSize: 20 }} />
        </Button>
        <Popconfirm
          title="Xác nhận xóa sản phẩm"
          onConfirm={confirmDelete}
          onVisibleChange={() => console.log('visible change')}
          okText="Xóa"
          cancelText="Hủy"
          placement="topRight"
        >
          <Button type="text" danger title="Xóa sản phẩm">
            <DeleteOutlined style={{ fontSize: 20 }} />
          </Button>
        </Popconfirm>
      </div>
      {isShowEditProduct && (
        <EditProductModal
          title="Cập nhật sản phẩm"
          visible={isShowEditProduct}
          onCancel={handleCloseEditProduct}
          data={data}
        />
      )}
      <PreviewProductModal
        title="Chi tiết sản phẩm"
        visible={isShowPreviewProduct}
        onCancel={handleClosePreviewProduct}
        data={data}
      />
    </>
  );
};

export default ActionProductItem;
