import { 
  BrowserRouter, 
  Route, 
  Routes
}                        from "react-router-dom";

import { ROUTER_NAME }   from "../config/constants";
import AuthPage          from "../layout/auth/AuthPage";
import Login             from "../layout/auth/components/Login";
import ForgotPassword    from "../layout/auth/components/ForgotPassword";


const PublicRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />}>
          <Route index element={<Login />} />
          <Route path={ROUTER_NAME.LOGIN.PATH} element={<Login />} />
          <Route path={ROUTER_NAME.FORGOT_PASSWORD.PATH} element={<ForgotPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRouters;
