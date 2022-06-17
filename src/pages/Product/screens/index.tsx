import './product.style.scss';
import './productV2.style.css';
import { useEffect, useState } from 'react';
import { Divider, Row } from 'antd';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import Pagination from '../../../components/Pagination';
import LoadingTable from '../../../components/LoadingTable';
import FilterProduct from './components/FilterProduct';
import ListProduct from './components/ListProduct';
import {
  getListProductAction,
  setCategoriesAction,
  setLoadingAction,
} from 'pages/Product/redux/ProductActions';
import { getListProductCategoryAction } from 'pages/ProductCategory/redux/ProductCategoryActions';
import { useSelector } from 'setup';

const ProductList = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);
  const products = useSelector((state) => state.product.ListProduct);
  const [filter, setFilter] = useState(0);

  const initialValues = {
    page: 0,
    pageSize: 10,
    category_id: -1,
    query: '',
    status: -1,
    order_by: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      setFilter(filter + 1);
    },
  });

  const setValueFormik = (name: string, value: any) => {
    formik.setFieldValue(name, value);
  };

  useEffect(() => {
    dispatch(
      getListProductCategoryAction({}, (data: any) => {
        dispatch(
          setCategoriesAction(
            data.results.map((item: any) => {
              return { label: item.name, value: item.id };
            })
          )
        );
      })
    );
  }, []);

  useEffect(() => {
    const payload = {
      page: formik.values.page,
      pageSize: formik.values.pageSize,
      category_id: formik.values.category_id || -1,
      query: formik.values.query || '',
      status: formik.values.status || -1,
      order_by: formik.values.order_by || '',
    };
    dispatch(setLoadingAction(true));
    dispatch(
      getListProductAction(payload, () => {
        setTimeout(() => {
          dispatch(setLoadingAction(false));
        }, 500);
      })
    );
  }, [filter]);

  const pageChange = (page: number, pageSize: number) => {
    setValueFormik('page', page - 1);
    setValueFormik('pageSize', pageSize);
    setFilter(filter + 1);
  };

  return (
    <>
      <FilterProduct
        data={formik.values}
        handleSearch={formik.submitForm}
        changeValue={setValueFormik}
      />
      <Divider />
      {loading ? (
        <LoadingTable />
      ) : (
        <>
          <Row className="mb-4">
            <ListProduct />
          </Row>
          <Row justify="end">
            <Pagination
              currentPage={formik.values.page}
              totalItem={products.total}
              pageChange={pageChange}
            />
          </Row>
        </>
      )}
    </>
  );
};

export default ProductList;
