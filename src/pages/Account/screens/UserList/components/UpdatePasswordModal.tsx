import { Button, Divider, Input, Modal }  from "antd";
import { useFormik }                      from "formik";
import { useDispatch }                    from "react-redux";
import { Row }                            from "reactstrap";

import { formSchemaCreatePassword }       from "pages/Account/models/FormSchemaAccount";
import { resetPasswordAccountAction }     from "pages/Account/redux/AccountActions";

interface IProps {
  visible   : boolean;
  userId    :number;
  onClose   : () => void;
}

const UpdatePasswordModal = ({ visible, userId, onClose }: IProps) => {
  const dispatch = useDispatch();

  const initialValues = {
    id: userId,
    password: "00000000",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: formSchemaCreatePassword,
    onSubmit: (values) => handleSubmit(),
  });

  const setValueFormik = (name: string, value: any) => {
    formik.setFieldValue(name, value);
  };

  const handleSubmit = () => {
    const payload = {
      ...formik.values
    };

    dispatch(resetPasswordAccountAction(payload, () => {
      onClose();
    }))
  };

  return (
    <>
      <Modal
        title="Đặt lại mật khẩu cho tài khoản"
        centered
        visible={visible}
        onCancel={onClose}
        footer={null}
      >
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
        <Divider />
        <Row>
          <div className="d-flex justify-content-center">
            <Button
              type="primary"
              size="large"
              className="w-50"
              onClick={formik.submitForm}
            >
              Lưu thông tin
            </Button>
            <Button size="large" onClick={onClose} className="w-50">
              Hủy
            </Button>
          </div>
        </Row>
      </Modal>
    </>
  );
};

export default UpdatePasswordModal;
