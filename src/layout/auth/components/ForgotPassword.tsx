import { Button, Form, Input } from "antd";
import { useFormik } from "formik";
import React, { useState } from "react";
import { MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ROUTER_NAME } from "config/constants";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "admin@gmail.com",
    password: "1234567",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      // history.push('/manage-user/user-list');
      setLoading(true);
    },
  });

  const changeValueHandle = (e:any) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };

  const onBlur = (e:any) => {
    formik.setFieldTouched(e.target.name, true);
  };

  return (
    <Form
      className="form w-100 h-100"
      name="basic"
    >
      <div className="text-center mb-10">
        <h3 className="text-dark mb-3">Đặt lại mật khẩu</h3>
      </div>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Email không được để trống!",
          },
        ]}
      >
        <Input size="large" prefix={<MailOutlined />} placeholder="Email" />
      </Form.Item>
      <div className="text-center mt-3">
        <Button type="primary" size="large" htmlType="submit">
          Đặt lại mật khẩu
        </Button>
      </div>
      <div className="text-center mt-3">
        <Link to={`/${ROUTER_NAME.LOGIN.PATH}`}>Đăng nhập</Link>
      </div>
    </Form>
  );
};

export default ForgotPassword;
