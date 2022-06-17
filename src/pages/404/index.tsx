import { Button, Result } from "antd";
import { ROUTER_NAME } from "config/constants";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const clickGoHome = () => {
    navigate(ROUTER_NAME.DASHBOARD.PATH);
  };

  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Xin lỗi, trang bạn truy cập không tồn tại."
        extra={
          <Button type="primary" onClick={clickGoHome}>
            Trang chủ
          </Button>
        }
      />
    </>
  );
};

export default NotFound;
