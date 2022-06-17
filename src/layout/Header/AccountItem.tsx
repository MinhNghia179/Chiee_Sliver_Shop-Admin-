import { useState }     from "react";
import { UserOutlined } from "@ant-design/icons";

import UserDetail       from "pages/Account/screens/UserDetail";
import { useSelector }  from "setup";

const AccountItem = () => {
  const [isVisibleUserDetail, setIsVisibleUserDetail] = useState<boolean>(false);
  const userInfo = useSelector(state => state.auth.user_info);

  const handleOpenUserDetail = () => setIsVisibleUserDetail(true);
  const handleCloseUserDetail = () => setIsVisibleUserDetail(false);
  
  return (
    <>
      <a onClick={handleOpenUserDetail}>
        <UserOutlined />
        &emsp;<span>Tài khoản</span>
      </a>
      {isVisibleUserDetail && (
        <UserDetail
          userInfo={userInfo}
          isModalVisible={isVisibleUserDetail}
          handleCancel={handleCloseUserDetail}
        />
      )}
    </>
  );
};

export default AccountItem;
