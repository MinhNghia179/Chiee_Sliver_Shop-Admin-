import { Menu } from "antd";
import { ROUTER_NAME } from "config/constants";
import { Link } from "react-router-dom";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import AccountItem from "./AccountItem";

const MenuHeader = (
  <Menu className="menu-header">
    <Menu.Item>
      <AccountItem/>
    </Menu.Item>
    <Menu.Item>
      <Link to={ROUTER_NAME.LOGOUT.PATH}>
        <LogoutOutlined />
        &emsp;<span>Đăng xuất</span>
      </Link>
    </Menu.Item>
  </Menu>
);

export default MenuHeader;
