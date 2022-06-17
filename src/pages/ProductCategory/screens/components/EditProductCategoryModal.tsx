import { UploadOutlined } from '@ant-design/icons';
import { Form, Input, Modal, Switch } from 'antd';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import './EditProductCategoryModal.scss';

import {
  MESSAGE_ERROR,
  MESSAGE_SUCCESS,
  MESSAGE_WARNING,
} from 'config/message';
import { formSchemaProductCategory } from 'pages/ProductCategory/models/FormSchemaProductCategory';
import { ProductCategoryModel } from 'pages/ProductCategory/models/ProductCategoryModel';
import {
  createProductCategoryAction,
  getListProductCategoryAction,
  updateProductCategoryAction,
} from 'pages/ProductCategory/redux/ProductCategoryActions';
import { uploadFileAPI } from 'services/uploadFileApi';
import { getBase64Image, isEmptyObject, slug } from 'utils';
import { toastError, toastSuccess, toastWarning } from 'utils/message';

interface IProps {
  title: string;
  visible: boolean;
  data?: ProductCategoryModel;
  onCancel: () => void;
  onOk?: () => void;
}

const EditProductCategoryModal = (props: IProps) => {
  const { title, visible, data, onCancel, onOk } = props;
  const dispatch = useDispatch();

  const initialValues = {
    id: data ? data.id : null,
    name: data ? data.name : '',
    code: data ? data.code : '',
    thumbnail: data ? data.thumbnail : null,
    status: data ? data.status : true,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: formSchemaProductCategory,
    onSubmit: (values) => handleSubmit(),
  });

  const setValueFormik = (name: string, value: any) => {
    formik.setFieldValue(name, value);
  };

  const handleSubmit = () => {
    if (!isEmptyObject(formik.errors)) return;

    if (data) {
      handleUpdateProductCategory();
    } else {
      handleCreateProductCategory();
    }
  };

  const handleCreateProductCategory = () => {
    const payload = {
      name: formik.values.name,
      code: slug(formik.values.name),
      thumbnail: formik.values.thumbnail,
      status: formik.values.status,
    };
    dispatch(
      createProductCategoryAction(payload, (data: any) => {
        if (data.status) {
          toastSuccess(MESSAGE_SUCCESS.CREATE_PRODUCT_CATEGORY);
          onCancel();
          dispatch(getListProductCategoryAction({}));
        } else {
          toastError(MESSAGE_ERROR.CREATE_PRODUCT_CATEGORY);
        }
      })
    );
  };

  const handleUpdateProductCategory = () => {
    const payload = {
      id: formik.values.id,
      name: formik.values.name,
      code: slug(formik.values.name),
      thumbnail: formik.values.thumbnail,
      status: formik.values.status,
    };
    dispatch(
      updateProductCategoryAction(payload, (data: any) => {
        if (data.status) {
          toastSuccess(MESSAGE_SUCCESS.UPDATE_PRODUCT_CATEGORY);
          onCancel();
          dispatch(getListProductCategoryAction({}));
        } else {
          toastError(MESSAGE_ERROR.UPDATE_PRODUCT_CATEGORY);
        }
      })
    );
  };

  const handleChangeImage = (event: any) => {
    getBase64Image(event)
      .then((data: any) => {
        const maxAllowedSize = 2 * 1024 * 1024;
        if (data.size < maxAllowedSize) {
          const payload = {
            file_name: data.file_name,
            base64: data.base64,
          };

          uploadFileAPI(payload)
            .then((result) => {
              setValueFormik('thumbnail', result.url);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          toastWarning(MESSAGE_WARNING.UPLOAD_IMAGE);
        }
      })
      .catch((error: any) => {});
  };

  const onChangeStatus = (checked: any) => {
    setValueFormik('status', checked);
  };

  return (
    <>
      <Modal
        title={title}
        centered
        visible={visible}
        onOk={formik.submitForm}
        onCancel={onCancel}
        width={1000}
        className="edit-product-category-form"
        okText="Lưu"
        cancelText="Hủy"
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item label="Tên danh mục">
            <Input
              onChange={(event) => setValueFormik('name', event.target.value)}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            {formik.errors?.name && (
              <span className="text-danger">{formik.errors?.name}</span>
            )}
          </Form.Item>
          <Form.Item label="Ảnh đại diện">
            <input
              type="file"
              id="input-image"
              hidden
              onChange={(event) => handleChangeImage(event)}
            />
            {formik.values.thumbnail ? (
              <label htmlFor="input-image">
                <img
                  className="image-preview"
                  src={formik.values.thumbnail || ''}
                />
              </label>
            ) : (
              <label htmlFor="input-image" className="label-input-image">
                <span className="d-flex">
                  <UploadOutlined className="mt-1 mr-1" /> Chọn ảnh
                </span>
              </label>
            )}
          </Form.Item>
          <Form.Item label="Trạng thái">
            <Switch
              checkedChildren="Hiển thị"
              unCheckedChildren="Ẩn"
              defaultChecked={formik.values.status}
              onChange={onChangeStatus}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditProductCategoryModal;
