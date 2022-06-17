import { Button, Result } from "antd";
import { ROUTER_NAME } from "config/constants";
import { useNavigate } from "react-router-dom";

const NotAuthorized = () => {
  const navigate = useNavigate();

  const clickGoHome = () => {
    navigate(ROUTER_NAME.DASHBOARD.PATH);
  };

  return (
    <>
      <Result
        status="403"
        title="403"
        subTitle="Xin lỗi, bạn không được phép truy cập trang này."
        extra={
          <Button type="primary" onClick={clickGoHome}>
            Trang chủ
          </Button>
        }
      />
    </>
  );
};

export default NotAuthorized;
