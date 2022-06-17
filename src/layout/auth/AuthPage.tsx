import "./AuthPage.scss";
import { Outlet } from "react-router-dom";

const AuthPage = () => {
  return (
      <div className="auth d-flex flex-column flex-column-fluid  position-x-center">
        
        {/* <div className="header-authen">
          <h1>logo</h1>
        </div>
         */}
        <div className="d-flex flex-center flex-column flex-column-fluid p-10 p-lg-20 h-100 content">
          <div className="content-box w-auto bg-white rounded shadow-sm p-4 p-lg-15 mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
  );
};

export default AuthPage;
