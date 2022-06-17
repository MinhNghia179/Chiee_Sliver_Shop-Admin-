import { 
  BrowserRouter, Route, 
  Routes
}                        from "react-router-dom";
import { useDispatch }   from "react-redux";
import { useEffect }     from "react";

import { 
  getListRoleAction 
}                        from "pages/Account/redux/AccountActions";
import { ROUTER_NAME }   from "config/constants";
import Layout            from "layout";
import Dashboard         from "pages/Dashboard";
import ProductList       from "pages/Product/screens";
import ProductCategory   from "pages/ProductCategory/screens";
import Blog              from "pages/Blog/screens";
import Logout            from "pages/Auth/Logout";
import Order             from "pages/Order/screens";
import NotFound          from "pages/404";
import UserList          from "pages/Account/screens/UserList";
import Feedback          from "pages/Feedback";

const PrivateRouters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListRoleAction({}))
  }, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path={ROUTER_NAME.PRODUCT_LIST.PATH} element={<ProductList />} />
          <Route path={ROUTER_NAME.PRODUCT_CATEGORY.PATH} element={<ProductCategory />} />
          <Route path={ROUTER_NAME.ORDER.PATH} element={<Order />} />
          <Route path={ROUTER_NAME.BLOG.PATH} element={<Blog />} />
          <Route path={ROUTER_NAME.CONTACT.PATH} element={<Feedback />} />
          <Route path={ROUTER_NAME.USER_LIST.PATH} element={<UserList />} />
          <Route path={ROUTER_NAME.LOGOUT.PATH} element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRouters;
