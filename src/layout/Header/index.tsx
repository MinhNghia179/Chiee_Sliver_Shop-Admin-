import { useEffect, useState }          from "react";
import { Avatar, Dropdown, Layout }     from "antd";
import { useLocation }                  from "react-router-dom";

import MenuHeader                       from "./MenuHeader";
import { AVATAR_DEFAULT, ROUTER_NAME }  from "config/constants";
import { useSelector }                  from "setup";

const { Header } = Layout;
interface IProps {
  collapsed: boolean;
}

const HeaderComponent = ({ collapsed }: IProps) => {
  let location = useLocation();
  const userInfo = useSelector((state) => state.auth.user_info);
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case ROUTER_NAME.DASHBOARD.PATH:
        setTitle(ROUTER_NAME.DASHBOARD.NAME);
        break;
      case ROUTER_NAME.PRODUCT_LIST.PATH:
        setTitle(ROUTER_NAME.PRODUCT_LIST.NAME);
        break;
      case ROUTER_NAME.PRODUCT_CATEGORY.PATH:
        setTitle(ROUTER_NAME.PRODUCT_CATEGORY.NAME);
        break;
      case ROUTER_NAME.BLOG.PATH:
        setTitle(ROUTER_NAME.BLOG.NAME);
        break;
      case ROUTER_NAME.ACCOUNT.PATH:
        setTitle(ROUTER_NAME.ACCOUNT.NAME);
        break;
      case ROUTER_NAME.USER_LIST.PATH:
        setTitle(ROUTER_NAME.USER_LIST.NAME);
        break;
      case ROUTER_NAME.ORDER.PATH:
        setTitle(ROUTER_NAME.ORDER.NAME);
        break;
      case ROUTER_NAME.USER_LIST.PATH:
        setTitle(ROUTER_NAME.USER_LIST.NAME);
        break;
      case ROUTER_NAME.CONTACT.PATH:
        setTitle(ROUTER_NAME.CONTACT.NAME);
        break;
      default: 
        setTitle("");
        break;
    }
  }, [location]);

  return (
    <Header className="site-layout-background" style={{ padding: "0 20px" }}>
      <div className="d-flex justify-content-between align-items-center h-100">
        <h4>{title}</h4>
        <div className="d-flex align-items-center h-100">
          <h6 className="mt-2">
            Hi, {userInfo?.last_name} {userInfo?.first_name}
          </h6>
          &emsp;
          <Dropdown overlay={MenuHeader} placement="bottomRight" arrow>
            <Avatar src={userInfo?.avatar ||AVATAR_DEFAULT} />
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
