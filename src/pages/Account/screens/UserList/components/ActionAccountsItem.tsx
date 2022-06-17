import {
  FormOutlined, LockOutlined,
  KeyOutlined, UnlockOutlined,
}                                       from "@ant-design/icons";
import { Button, Popconfirm, Tooltip }  from "antd";
import { useState }                     from "react";
import { useDispatch }                  from "react-redux";

import { ROLE_CODE }                    from "config/constants";
import { AccountModel }                 from "pages/Account/models/AccountModel";
import { updateStatusAccountAction }    from "pages/Account/redux/AccountActions";
import { useSelector }                  from "setup";
import UserDetail                       from "../../UserDetail";
import UpdatePasswordModal              from "./UpdatePasswordModal";

interface IProps {
  data: AccountModel;
}

const ActionAccountsItem = ({ data }: IProps) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.user_info);
  const [visibleUpdatePassword, setVisibleUpdatePassword] = useState<boolean>(false);
  const [isVisibleUserDetail, setIsVisibleUserDetail] = useState<boolean>(false);

  const handleOpenUserDetail = () => setIsVisibleUserDetail(true);
  const handleCloseUserDetail = () => setIsVisibleUserDetail(false);
  const handleOpenUpdatePassword = () => setVisibleUpdatePassword(true);
  const handleCloseUpdatePassword = () => setVisibleUpdatePassword(false);

  const confirm = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const payload = {
          id: data.id,
          status: !data.status,
        };
        dispatch(updateStatusAccountAction(payload));
        resolve({});
      }, 2000);
    });
  };

  return (
    <>
      <Tooltip placement="bottom" title="Cập nhật tài khoản">
        <Button type="text" onClick={handleOpenUserDetail}>
          <FormOutlined style={{ fontSize: 20 }} />
        </Button>
      </Tooltip>
      {data.role_code !== ROLE_CODE.USER && (
        <Tooltip placement="bottom" title="Đặt lại mật khẩu nhật mật khẩu">
          <Button type="text" onClick={handleOpenUpdatePassword}>
            <KeyOutlined style={{ fontSize: 20 }} />
          </Button>
        </Tooltip>
      )}
      {data.id !== userInfo?.id && (
        <Tooltip
          placement="bottom"
          title={data.status ? "Khóa tài khoản" : "Mở khóa tài khoản"}
        >
          <Popconfirm
            placement="topRight"
            title={
              data.status
                ? "Xác nhận khóa tài khoản"
                : "Xác nhận mở khóa tài khoản"
            }
            onConfirm={confirm}
            onVisibleChange={() => console.log("visible change")}
            okText="Xác nhận"
            cancelText="Hủy"
          >
            <Button type="text">
              {data.status ? (
                <UnlockOutlined style={{ fontSize: 20 }} />
              ) : (
                <LockOutlined style={{ fontSize: 20 }} />
              )}
            </Button>
          </Popconfirm>
        </Tooltip>
      )}
      {visibleUpdatePassword && (
        <UpdatePasswordModal
          userId={data.id}
          visible={visibleUpdatePassword}
          onClose={handleCloseUpdatePassword}
        />
      )}
      {isVisibleUserDetail && (
        <UserDetail
          userInfo={data}
          isModalVisible={isVisibleUserDetail}
          handleCancel={handleCloseUserDetail}
        />
      )}
    </>
  );
};

export default ActionAccountsItem;
