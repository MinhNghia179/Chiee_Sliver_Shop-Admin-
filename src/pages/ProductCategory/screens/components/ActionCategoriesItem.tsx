import { Button, Popconfirm } from 'antd';
import { FormOutlined, DeleteOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { MESSAGE_ERROR, MESSAGE_SUCCESS } from 'config/message';
import { ProductCategoryModel } from 'pages/ProductCategory/models/ProductCategoryModel';
import {
  deleteProductCategoryAction,
  getListProductCategoryAction,
} from 'pages/ProductCategory/redux/ProductCategoryActions';
import { toastError, toastSuccess } from 'utils/message';
import EditProductCategoryModal from './EditProductCategoryModal';

interface IProps {
  data: ProductCategoryModel;
}

const ActionCategoriesItem = ({ data }: IProps) => {
  const dispatch = useDispatch();
  const [isShowEditProductCategory, setIsShowProductCategory] = useState(false);

  const handleOpenEditProductCategory = () => setIsShowProductCategory(true);

  const handleCloseEditProductCategory = () => setIsShowProductCategory(false);

  const confirm = () => {
    return new Promise((resolve: any) => {
      const payload = {
        id: data.id,
      };
      dispatch(
        deleteProductCategoryAction(payload, (result: any) => {
          if (result.status) {
            toastSuccess(MESSAGE_SUCCESS.DELETE_PRODUCT_CATEGORY);
            setTimeout(() => {
              dispatch(getListProductCategoryAction({}));
              resolve();
            }, 500);
          } else {
            toastError(MESSAGE_ERROR.DELETE_PRODUCT_CATEGORY);
          }
        })
      );
    });
  };

  return (
    <>
      <Button
        onClick={handleOpenEditProductCategory}
        type="text"
        title="Cập nhật danh mục"
      >
        <FormOutlined style={{ fontSize: 20 }} />
      </Button>
      <Popconfirm
        title="Xác nhận xóa danh mục"
        onConfirm={confirm}
        onVisibleChange={() => console.log('visible change')}
        okText="Xóa"
        cancelText="Hủy"
        placement="topRight"
      >
        <Button danger type="text" title="Xóa danh mục">
          <DeleteOutlined style={{ fontSize: 20 }} />
        </Button>
      </Popconfirm>
      {isShowEditProductCategory && (
        <EditProductCategoryModal
          title="Cập nhật danh mục sản phẩm"
          visible={isShowEditProductCategory}
          onCancel={handleCloseEditProductCategory}
          data={data}
        />
      )}
    </>
  );
};

export default ActionCategoriesItem;
