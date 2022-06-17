import { ROLE_CODE } from "config/constants";
import { useSelector } from "setup";
import PrivateRouters   from "./PrivateRouters";
import PublicRouters    from "./PublicRouters";

const Router = () => {
  const userInfo = useSelector(state => state.auth.user_info);
  
  return userInfo && userInfo.role_code !== ROLE_CODE.USER && userInfo.status ? <PrivateRouters/> : <PublicRouters/>;
};

export default Router;
