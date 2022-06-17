import { Badge, Layout, Menu } from 'antd';
import {
  AreaChartOutlined,
  ApartmentOutlined,
  GroupOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  AliwangwangOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { ROLE_CODE, ROUTER_NAME } from '../../config/constants';
import { useCallback, useState } from 'react';
import { useSelector } from 'setup';
import { FeedbackModel } from 'pages/Feedback/models/FeedbackModel';

const { Sider } = Layout;
const { SubMenu } = Menu;
const rootSubmenuKeys = ['sub1', 'sub2'];
interface IProps {
  collapsed: boolean;
  toggle: () => void;
}

const SidebarComponent = ({ collapsed, toggle }: IProps) => {
  let location = useLocation();
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const userInfo = useSelector((state) => state.auth.user_info);
  const feedbacks = useSelector((state) => state.feedback.ListFeedback);

  const onOpenChange = (keys: any[]) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const getFeedbackUnread = useCallback(() => {
    const filterFeedback = feedbacks.results.filter(
      (item: FeedbackModel) => Boolean(item.status) === false
    );
    return filterFeedback.length;
  }, [feedbacks]);

  return (
    <Sider
      theme="dark"
      collapsible
      collapsed={collapsed}
      onCollapse={toggle}
      className="sidebar"
    >
      <div className="logo">
        <h3 className="text-light">{collapsed ? 'A' : 'Chiee sliver'}</h3>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        defaultSelectedKeys={[`${ROUTER_NAME.DASHBOARD.PATH}`]}
        selectedKeys={[`${location.pathname}`]}
      >
        <Menu.Item
          key={ROUTER_NAME.DASHBOARD.PATH}
          icon={<AreaChartOutlined />}
        >
          <Link to={ROUTER_NAME.DASHBOARD.PATH}>Dashboard</Link>
        </Menu.Item>
        {[ROLE_CODE.ADMIN, ROLE_CODE.MANAGE_PRODUCT].includes(
          userInfo?.role_code || ''
        ) && (
          <SubMenu key="sub1" icon={<ApartmentOutlined />} title="Sản phẩm">
            <Menu.Item key={ROUTER_NAME.PRODUCT_LIST.PATH}>
              <Link to={ROUTER_NAME.PRODUCT_LIST.PATH}>Tất cả sản phẩm</Link>
            </Menu.Item>
            <Menu.Item key={ROUTER_NAME.PRODUCT_CATEGORY.PATH}>
              <Link to={ROUTER_NAME.PRODUCT_CATEGORY.PATH}>Danh mục</Link>
            </Menu.Item>
          </SubMenu>
        )}
        {[ROLE_CODE.ADMIN, ROLE_CODE.MANAGE_ORDER].includes(
          userInfo?.role_code || ''
        ) && (
          <Menu.Item
            key={ROUTER_NAME.ORDER.PATH}
            icon={<ShoppingCartOutlined />}
          >
            <Link to={ROUTER_NAME.ORDER.PATH}>Đơn hàng</Link>
          </Menu.Item>
        )}
        {[ROLE_CODE.ADMIN, ROLE_CODE.MANAGE_BLOG].includes(
          userInfo?.role_code || ''
        ) && (
          <Menu.Item key={ROUTER_NAME.BLOG.PATH} icon={<GroupOutlined />}>
            <Link to={ROUTER_NAME.BLOG.PATH}>Bài viết</Link>
          </Menu.Item>
        )}
        {[ROLE_CODE.ADMIN].includes(userInfo?.role_code || '') && (
          <>
            <Menu.Item
              key={ROUTER_NAME.CONTACT.PATH}
              icon={<AliwangwangOutlined />}
            >
              <Link to={ROUTER_NAME.CONTACT.PATH}>
                Phản hồi &ensp; <Badge count={getFeedbackUnread()} />
              </Link>
            </Menu.Item>
            <Menu.Item key={ROUTER_NAME.USER_LIST.PATH} icon={<TeamOutlined />}>
              <Link to={ROUTER_NAME.USER_LIST.PATH}>Thành viên</Link>
            </Menu.Item>
          </>
        )}
      </Menu>
    </Sider>
  );
};

export default SidebarComponent;
