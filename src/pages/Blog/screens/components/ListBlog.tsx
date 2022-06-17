import { Table, Row } from 'antd';
import LoadingTable from 'components/LoadingTable';
import { useFormik } from 'formik';
import { getListBlogAction } from 'pages/Blog/redux/BlogActions';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'setup';
import { columns } from './DataColumnsBlog';
import Pagination from 'components/Pagination';

const ListBlog = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const blogs = useSelector((state) => state.blog.ListBlog);
  const [dataBlog, setDataBlog] = useState<any[]>([]);
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

  const getListBlog = () => {
    const payload = {
      page: formik.values.page,
      pageSize: formik.values.pageSize,
    };
    setIsLoading(true);
    dispatch(
      getListBlogAction(payload, () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
    );
  };

  const formatDataTable = () => {
    const dataFormat = blogs.results.map((blog) => {
      return {
        key: blog.id,
        name: blog.name,
        thumbnail: blog.thumbnail,
        status: blog.status,
        history: blog,
        action: blog,
      };
    });
    setDataBlog(dataFormat);
  };

  const pageChange = (page: number, pageSize: number) => {
    setValueFormik('page', page - 1);
    setValueFormik('pageSize', pageSize);
    setFilter(filter + 1);
  };

  useEffect(() => {
    getListBlog();
  }, [filter]);

  useEffect(() => {
    formatDataTable();
  }, [blogs]);

  return isLoading ? (
    <LoadingTable />
  ) : (
    <>
      <Row className="mb-4">
        <Table
          columns={columns}
          dataSource={dataBlog}
          pagination={false}
          scroll={{ x: 1500, y: 680 }}
        />
      </Row>
      <Row justify="end">
        <Pagination
          currentPage={formik.values.page}
          totalItem={blogs.total}
          pageChange={pageChange}
        />
      </Row>
    </>
  );
};

export default ListBlog;
