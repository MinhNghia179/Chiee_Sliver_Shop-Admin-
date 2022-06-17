import { Input, Modal }             from "antd";
import { useFormik }                from "formik";
import { useDispatch }              from "react-redux";
import { Row }                      from "reactstrap";
import { 
  useCallback, 
  useEffect, 
  useState 
}                                   from "react";

import ButtonUpload                 from "components/ButtonUpload";
import InputText                    from "components/Input/InputText";
import InputSelect                  from "components/InputSelect";
import { formSchemaCreateAccount }  from "pages/Account/models/FormSchemaAccount";
import { RoleModel }                from "pages/Account/models/RoleModel";
import { createAccountAction }      from "pages/Account/redux/AccountActions";
import { useSelector }              from "setup";

interface IProps {
  visible: boolean;
  onClose: () => void;
}

const AddAccountModal = ({ visible, onClose }: IProps) => {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.account.ListRole);
  const [dataRoles, setDataRoles] = useState<any[]>([]);

  const initialValues = {
    email         : "",
    password      : "",
    first_name    : "",
    last_name     : "",
    phone_number  : null,
    address       : null,
    role_code     : "",
    avatar        : null,
    status        : true,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: formSchemaCreateAccount,
    onSubmit: (values) => handleSubmit(),
  });

  const setValueFormik = (name: string, value: any) => {
    formik.setFieldValue(name, value);
  };

  const handleSubmit = () => {
    const payload = {
      first_name    : formik.values.first_name,
      last_name     : formik.values.last_name,
      email         : formik.values.email,
      password      : formik.values.password,
      phone_number  : formik.values.phone_number || null,
      address       : formik.values.address || null,
      role_code     : formik.values.role_code,
      avatar        : formik.values.avatar,
      status        : true
    }
    dispatch(createAccountAction(payload,() => {
      onClose();
    }))
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

  return (
    <>
      <Modal
        title="Tạo tài khoản mới"
        centered
        visible={visible}
        onCancel={onClose}
        okText="Lưu thông tin"
        cancelText="Hủy"
        onOk={formik.submitForm}
      >
        <Row>
          <div className="col-md-6">
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
          </div>
          <div className="col-md-6">
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
          </div>
        </Row>
        <Row>
          <div className="col-md-12">
            <InputText
              id="email"
              name="email"
              placeholder=""
              label="Email"
              value={formik.values.email}
              require
              onChangeValue={(event) =>
                setValueFormik("email", event.target.value)
              }
              errors={formik.errors?.email}
              touched={formik.touched.email}
            />
          </div>
        </Row>
        <Row>
          <div className="col-md-12 mb-3">
            <label className="mb-2">
              <strong>
                Mật khẩu<span className="text-danger"> * </span>
              </strong>
            </label>
            <Input.Password
              value={formik.values.password}
              onChange={(event) =>
                setValueFormik("password", event.target.value)
              }
            />
            {formik.errors?.password && formik.touched?.password && (
              <div className="mt-2">
                <div className="" style={{ color: "red" }}>
                  {formik.errors.password}
                </div>
              </div>
            )}
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
              placeholder="Vai trò của tài khoản"
              onChangeValue={(value) => setValueFormik("role_code", value)}
              errors={formik.errors?.role_code}
              touched={formik.touched.role_code}
            />
          </div>
        </Row>
        <Row>
          <div className="col-md-12 mb-3">
            <label className="mb-2">
              <strong>Ảnh đại diện</strong>
            </label>
            <ButtonUpload imageUrl={formik.values.avatar} setUrl={(url) => setValueFormik("avatar", url)} />
          </div>
        </Row>
      </Modal>
    </>
  );
};

export default AddAccountModal;
