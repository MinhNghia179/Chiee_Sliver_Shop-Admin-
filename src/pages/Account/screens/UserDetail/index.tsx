import "./user-detail.style.scss";
import { Avatar, Col, Image, Modal, Row }   from "antd";
import { useCallback, useEffect, useState } from "react";
import { useDispatch }                      from "react-redux";
import { useFormik }                        from "formik";

import { AVATAR_DEFAULT }                   from "config/constants";
import { useSelector }                      from "setup";
import { UserModel }                        from "layout/auth/models/UserModel";
import { RoleModel }                        from "pages/Account/models/RoleModel";
import { formSchemaUpdateAccount }          from "pages/Account/models/FormSchemaAccount";
import InputText                            from "components/Input/InputText";
import InputSelect                          from "components/InputSelect";
import { getBase64Image }                   from "utils";
import { uploadFileAPI }                    from "services/uploadFileApi";
import {
  setListAccountAction,
  updateInfoAccountAction,
}                                           from "pages/Account/redux/AccountActions";
import { updateUserInfoAction }             from "layout/auth/redux/AuthActions";

interface IProps {
  isModalVisible: boolean;
  userInfo?: UserModel;
  handleCancel: () => void;
}
const UserDetail = ({ isModalVisible, userInfo, handleCancel }: IProps) => {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.account.ListRole);
  const listAccount = useSelector((state) => state.account.ListAccount);
  const userAuth = useSelector((state) => state.auth.user_info);
  const [dataRoles, setDataRoles] = useState<any[]>([]);

  const initialValues = {
    first_name    : userInfo?.first_name || "",
    last_name     : userInfo?.last_name || "",
    phone_number  : userInfo?.phone_number || null,
    address       : userInfo?.address || null,
    role_code     : userInfo?.role_code || "",
    avatar        : userInfo?.avatar || null,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: formSchemaUpdateAccount,
    onSubmit: (values) => handleSubmit(),
  });

  const setValueFormik = (name: string, value: any) => {
    formik.setFieldValue(name, value);
  };

  const handleSubmit = () => {
    const payload = {
      id            : userInfo?.id || 0,
      first_name    : formik.values.first_name,
      last_name     : formik.values.last_name,
      phone_number  : formik.values.phone_number || null,
      address       : formik.values.address || null,
      role_code     : formik.values.role_code,
      avatar        : formik.values.avatar,
    };
    dispatch(
      updateInfoAccountAction(payload, () => {
        changeValueListAccount(payload);
        handleCancel();
      })
    );
  };

  const convertRole = useCallback(() => {
    const formatRoles = roles.results.map((role: RoleModel) => {
      return {
        value: role.code,
        label: role.name,
      };
    });
    setDataRoles(formatRoles);
  }, []);

  useEffect(() => {
    convertRole();
  }, []);

  const handleGetImage = (event: any) => {
    getBase64Image(event).then((val: any) => {
      const payload = {
        ...val,
      };
      uploadFileAPI(payload).then((data) => {
        setValueFormik("avatar", data.url);
      });
    });
  };

  const changeValueListAccount = (data: any) => {
    if (data?.id === userAuth?.id) {
      const newUserInfo = {
        ...userAuth,
        ...data,
      };
      dispatch(updateUserInfoAction(newUserInfo));
    }
    if (!!listAccount.results.length) {
      const newAccounts = listAccount.results.map((item) => {
        if (item.id === data.id) {
          return {
            ...item,
            ...data,
          };
        }

        return item;
      });
      dispatch(
        setListAccountAction({
          results: newAccounts,
          total: listAccount.total,
        })
      );
    }
  };

  return (
    <Modal
      title="Chi tiết tài khoản"
      visible={isModalVisible}
      onCancel={handleCancel}
      centered
      okText="Lưu thông tin"
      cancelText="Hủy"
      onOk={formik.submitForm}
    >
      <div className="user_detail">
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <Avatar
              src={
                <Image
                  src={formik.values.avatar || AVATAR_DEFAULT}
                  width={100}
                  height={100}
                />
              }
              size={100}
            />
            <div className="upload_image">
              <input
                id="input_upload"
                type="file"
                hidden
                onChange={handleGetImage}
                accept="image/*"
              />
              <label htmlFor="input_upload">Chọn ảnh</label>
            </div>
          </Col>
          <Col className="gutter-row" span={18}>
            <Row gutter={10}>
              <Col className="gutter-row" span={12}>
                <InputText
                  id="last_name"
                  name="last_name"
                  placeholder=""
                  label="Họ"
                  value={formik.values.last_name}
                  require
                  onChangeValue={(event) =>
                    setValueFormik("last_name", event.target.value)
                  }
                  errors={formik.errors?.last_name}
                  touched={formik.touched.last_name}
                />
              </Col>
              <Col className="gutter-row" span={12}>
                <InputText
                  id="first_name"
                  name="first_name"
                  placeholder=""
                  label="Tên"
                  value={formik.values.first_name}
                  require
                  onChangeValue={(event) =>
                    setValueFormik("first_name", event.target.value)
                  }
                  errors={formik.errors?.first_name}
                  touched={formik.touched.first_name}
                />
              </Col>
            </Row>
            <Row>
              <div className="col-md-12">
                <InputText
                  id="email"
                  name="email"
                  placeholder=""
                  label="Email"
                  value={userInfo?.email || ""}
                  require
                  disabled={true}
                />
              </div>
            </Row>
            <Row>
              <div className="col-md-12">
                <InputText
                  id="phone_number"
                  name="phone_number"
                  placeholder=""
                  label="Số điện thoại"
                  value={formik.values.phone_number || ""}
                  onChangeValue={(event) =>
                    setValueFormik("phone_number", event.target.value)
                  }
                  errors={formik.errors?.phone_number}
                  touched={formik.values?.phone_number}
                />
              </div>
            </Row>

            <Row>
              <div className="col-md-12">
                <InputText
                  id="address"
                  name="address"
                  placeholder=""
                  label="Địa chỉ"
                  value={formik.values.address || ""}
                  onChangeValue={(event) =>
                    setValueFormik("address", event.target.value)
                  }
                />
              </div>
            </Row>
            <Row>
              <div className="col-md-12">
                <InputSelect
                  label="Loại tài khoản"
                  require
                  data={dataRoles}
                  defaultValue={formik.values.role_code}
                  placeholder="Vai trò của tài khoản"
                  onChangeValue={(value) => setValueFormik("role_code", value)}
                  errors={formik.errors?.role_code}
                  touched={formik.touched.role_code}
                />
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default UserDetail;
