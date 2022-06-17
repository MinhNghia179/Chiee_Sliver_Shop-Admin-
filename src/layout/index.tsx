import "./Layout.scss";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import SidebarComponent from "./Sidebar";
import HeaderComponent from "./Header";
import { useDispatch } from "react-redux";
import { getListFeedbackAction } from "pages/Feedback/redux/FeedbackActions";

const { Content } = Layout;

const LayoutComponent = () => {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(!collapsed);

  useEffect(() => {
    dispatch(getListFeedbackAction());
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SidebarComponent collapsed={collapsed} toggle={toggle} />
      <Layout className="site-layout">
        <HeaderComponent collapsed={collapsed} />
        <Content
          className="site-layout-content"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
