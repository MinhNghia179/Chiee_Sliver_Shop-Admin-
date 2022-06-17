import { Button, Form, Input } from 'antd';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTER_NAME } from 'config/constants';
import { useDispatch } from 'react-redux';
import { loginAction } from '../redux/AuthActions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: 'admin@mtshop.co',
    password: 'admin@1234',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { setStatus, setSubmitting }: any) => {
      handleLogin();
    },
  });

  const changeValueHandle = (e: any) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };

  const changeValueFormik = (type: string, value: any) => {
    formik.setFieldValue(type, value);
  };

  const onBlur = (e: any) => {
    formik.setFieldTouched(e.target.name, true);
  };

  const handleLogin = () => {
    const payload = {
      email: formik.values.email,
      password: formik.values.password,
    };
    dispatch(
      loginAction(payload, () => {
        navigate(`${ROUTER_NAME.ROOT}`);
        //@ts-ignore
        document.location.reload();
      })
    );
    setLoading(true);
  };

  return (
    <Form className="form w-100 h-100 form-login" name="basic">
      <div className="text-center mb-10">
        <h3 className="text-dark mb-3">Đăng nhập vào Chiee Sliver Shop </h3>
      </div>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Tên đănh nhập không được để trống!',
          },
        ]}
      >
        <Input
          size="large"
          prefix={<UserOutlined />}
          placeholder="Email"
          defaultValue={formik.values.email}
          onChange={(event) => changeValueFormik('email', event.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="password"
        className="mt-3"
        rules={[
          {
            required: true,
            message: 'Mật khẩu không được để trống!',
          },
        ]}
      >
        <Input.Password
          size="large"
          prefix={<UnlockOutlined />}
          placeholder="Password"
          defaultValue={formik.values.password}
          onChange={(event) =>
            changeValueFormik('password', event.target.value)
          }
        />
      </Form.Item>

      <div className="text-center mt-3">
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          className="w-100 rounded"
          onClick={handleLogin}
        >
          Đăng nhập
        </Button>
      </div>
      <div className="text-center mt-3">
        <Link to={ROUTER_NAME.FORGOT_PASSWORD.PATH}>Quên mật khẩu</Link>
      </div>
    </Form>
  );
};

export default Login;
