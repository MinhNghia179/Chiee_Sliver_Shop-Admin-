import { Button, Col, Divider, Form, Row, Switch } from 'antd';
import Editor from 'components/Editor/Editor';
import InputImage from 'components/Input/InputImage/InputImage';
import InputPrice from 'components/Input/InputPrice';
import InputText from 'components/Input/InputText';
import InputSelect from 'components/InputSelect';
import ProductProperty from 'components/ProductProperty';
import { useFormik } from 'formik';
import _ from 'lodash';
import { formSchemaProduct } from 'pages/Product/models/FormSchemaProduct';
import { ProductModel } from 'pages/Product/models/ProductModel';
import { ProductColorModel } from 'pages/Product/models/ProductPropertiesModel';
import {
  createProductAction,
  getListProductAction,
  updateProductAction,
} from 'pages/Product/redux/ProductActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'setup';

interface IProps {
  data?: ProductModel;
  onCancelEdit: () => void;
}
const FormEditProduct = ({ data, onCancelEdit }: IProps) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.user_info);
  const dataCategory = useSelector((state) => state.product.DataCategories);

  const initialValues = {
    id: data ? data.id : null,
    category_id: data ? data.category_id : '',
    name: data ? data.name : '',
    price: data ? data.price : 1,
    promotion_price: data ? data.promotion_price : -1,
    promotion_time_start: data ? data.promotion_time_start : null,
    promotion_time_end: data ? data.promotion_time_end : null,
    list_image: data ? JSON.parse(data.list_image || '[]') : [],
    short_description: data ? data.short_description : '',
    description: data ? data.description : '',
    created_at: '',
    created_by: '',
    modified_at: '',
    modified_by: '',
    properties: data ? JSON.parse(data.properties || '[]') : [],
    status: data ? data.status : true,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: formSchemaProduct,
    onSubmit: (values) => handleSubmit(),
  });

  const setValueFormik = (name: string, value: any) => {
    formik.setFieldValue(name, value);
  };

  const handleSubmit = () => {
    const user_fullname = `${
      userInfo?.last_name ? userInfo?.last_name : '_ _ _'
    } ${userInfo?.first_name ? userInfo?.first_name : '_ _ _'}`;
    const payload = {
      ...formik.values,
      promotion_price:
        formik.values.promotion_price === -1
          ? null
          : formik.values.promotion_price,
      properties: JSON.stringify(formik.values.properties),
      list_image: JSON.stringify(formik.values.list_image),
      created_by: user_fullname,
      modified_by: user_fullname,
    };

    if (payload.id) {
      dispatch(
        updateProductAction(payload, (data: any) => {
          const payload = {
            page: 0,
            pageSize: 10,
          };
          dispatch(getListProductAction(payload));
          onCancelEdit();
        })
      );
    } else {
      dispatch(
        createProductAction(payload, (data: any) => {
          const payload = {
            page: 0,
            pageSize: 10,
          };
          dispatch(getListProductAction(payload));
          onCancelEdit();
        })
      );
    }
  };

  const handleSetProperties = (
    type: 'ADD' | 'EDIT' | 'DELETE',
    item: ProductColorModel
  ) => {
    const properties = [...formik.values.properties];
    if (type === 'ADD') {
      setValueFormik('properties', [...properties, item]);
    } else if (type === 'DELETE') {
      let newProperties = _.remove(
        properties,
        (element: ProductColorModel) => element.id !== item.id
      );
      setValueFormik('properties', [...newProperties]);
    } else if (type === 'EDIT') {
      let indexOfItem = properties.findIndex(
        (element: ProductColorModel) => element.id === item.id
      );
      if (indexOfItem > -1) {
        properties[indexOfItem] = item;
        setValueFormik('properties', [...properties]);
      }
    }
  };

  return (
    <form>
      <Row>
        <Col span={15}>
          <InputText
            id="product_name"
            name="product_name"
            label="Tên sản phẩm"
            require={true}
            placeholder=""
            value={formik.values.name}
            onChangeValue={(e) => setValueFormik('name', e.target.value)}
            errors={formik.errors?.name}
            touched={formik.touched?.name}
          />
          <Divider />
          <InputPrice
            valuePrice={formik.values.price}
            valuePromotionPrice={formik.values.promotion_price || -1}
            valuePromotionTimeStart={formik.values.promotion_time_start || ''}
            valuePromotionTimeEnd={formik.values.promotion_time_end || ''}
            handleChangeValue={(type, value) => setValueFormik(type, value)}
          />
          <Divider />
          <Editor
            label="Mô tả ngắn"
            placeholder=""
            value={formik.values.short_description || ''}
            onEditorChange={(data) =>
              setValueFormik('short_description', `${data}`)
            }
          />
          <Divider />
          <Editor
            label="Chi tiết sản phẩm"
            placeholder=""
            value={formik.values.description || ''}
            onEditorChange={(data) => setValueFormik('description', `${data}`)}
          />
          <Divider />
          <Form.Item label="Trạng thái" style={{ fontWeight: 'bold' }}>
            <Switch
              checkedChildren="Hiển thị"
              unCheckedChildren="Ẩn"
              defaultChecked={formik.values.status}
              onChange={(checked) => setValueFormik('status', checked)}
            />
          </Form.Item>
        </Col>
        <Col span={9}>
          <div style={{ paddingLeft: 20 }}>
            <InputSelect
              data={dataCategory || []}
              defaultValue={formik.values.category_id || ''}
              label="Chọn danh mục sản phẩm"
              require={true}
              onChangeValue={(value) => setValueFormik('category_id', value)}
              errors={formik.errors?.category_id}
              touched={formik.touched?.category_id}
            />
            <Divider />
            <ProductProperty
              properties={formik.values.properties}
              setProperties={handleSetProperties}
            />
            <Divider />
            <InputImage
              dataImages={formik.values.list_image}
              setDataImages={(data) => setValueFormik('list_image', data)}
            />
          </div>
        </Col>
      </Row>
      <Divider />
      <div>
        <Button className="px-5" onClick={onCancelEdit}>
          Hủy
        </Button>
        &emsp;
        <Button className="px-5" type="primary" onClick={formik.submitForm}>
          Lưu
        </Button>
      </div>
    </form>
  );
};

export default FormEditProduct;
