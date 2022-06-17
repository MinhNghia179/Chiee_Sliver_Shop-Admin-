import React from "react";
import { Button, Modal, Switch, Input } from "antd";
import Editor from "components/Editor/Editor";
import InputText from "components/Input/InputText";
import {
  MESSAGE_ERROR,
  MESSAGE_SUCCESS,
  MESSAGE_WARNING,
} from "config/message";
import { useFormik } from "formik";
import { BlogModel } from "pages/Blog/models/BlogModel";
import { formSchemaBlog } from "pages/Blog/models/FormSchemaBlog";
import { useDispatch } from "react-redux";
import { uploadFileAPI } from "services/uploadFileApi";
import { useSelector } from "setup";
import { getBase64Image, getFullName } from "utils";
import { toastSuccess, toastWarning } from "utils/message";
import { UploadOutlined } from "@ant-design/icons";
import {
  addBlogAction,
  getListBlogAction,
  updateBlogAction,
} from "pages/Blog/redux/BlogActions";

interface IProps {
  title: string;
  visible: boolean;
  data?: BlogModel;
  onClose: () => void;
}

const { TextArea } = Input;

const EditBlogModal = ({ title, data, visible, onClose }: IProps) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.user_info);

  const initialValues = {
    id: data ? data.id : null,
    name: data ? data.name : "",
    thumbnail: data ? data.thumbnail : null,
    short_description: data ? data.short_description : null,
    content: data ? data.content : null,
    created_by: getFullName(
      userInfo?.first_name || "",
      userInfo?.last_name || ""
    ),
    modified_by: getFullName(
      userInfo?.first_name || "",
      userInfo?.last_name || ""
    ),
    status: data ? data.status : true,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: formSchemaBlog,
    onSubmit: (values) => handleSubmit(),
  });

  const setValueFormik = (name: string, value: any) => {
    formik.setFieldValue(name, value);
  };

  const handleSubmit = () => {
    const payload = {
      ...formik.values,
    };
    if (data) {
      updateBlog(payload);
    } else {
      createBlog(payload);
    }
  };

  const createBlog = (data: any) => {
    dispatch(
      addBlogAction(data, () => {
        dispatch(getListBlogAction({ page: 0, pageSize: 10 }));
        onClose();
      })
    );
  };

  const updateBlog = (data: any) => {
    dispatch(
      updateBlogAction(data, () => {
        dispatch(getListBlogAction({ page: 0, pageSize: 10 }));
        onClose();
      })
    );
  };

  const handleChangeImage = (event: any) => {
    getBase64Image(event)
      .then((data: any) => {
        const maxAllowedSize = 2 * 1024 * 1024;
        if (data.size < maxAllowedSize) {
          const payload = {
            file_name: data.file_name,
            base64: data.base64,
          };

          uploadFileAPI(payload)
            .then((result) => {
              setValueFormik("thumbnail", result.url);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          toastWarning(MESSAGE_WARNING.UPLOAD_IMAGE);
        }
      })
      .catch((error: any) => {});
  };
  return (
    <Modal
      title={title}
      centered
      footer={false}
      visible={visible}
      onCancel={onClose}
      width={1000}
      className="edit-blog-form"
    >
      <InputText
        id="name"
        name="name"
        label="Tiêu đề bài viết"
        require={true}
        placeholder=""
        value={formik.values.name}
        onChangeValue={(e) => setValueFormik("name", e.target.value)}
        errors={formik.errors?.name}
        touched={formik.touched?.name}
      />
      <div className="row mb-3">
        <div className="col-md-6">
          <div>
            <label>
              <strong>Ảnh đại diện :</strong>
            </label>
            &emsp;
            <>
              <input
                type="file"
                id="input-image"
                hidden
                onChange={(event) => handleChangeImage(event)}
              />
              {formik.values.thumbnail ? (
                <label htmlFor="input-image">
                  <img
                    className="image-preview"
                    src={formik.values.thumbnail || ""}
                  />
                </label>
              ) : (
                <label htmlFor="input-image" className="label-input-image">
                  <span className="d-flex">
                    <UploadOutlined className="mt-1 mr-1" /> Chọn ảnh
                  </span>
                </label>
              )}
            </>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <label>
              <strong>Trạng thái :</strong>
            </label>
            &ensp;
            <Switch
              checkedChildren="Hiển thị"
              unCheckedChildren="Ẩn"
              checked={formik.values.status}
              onChange={(value) => setValueFormik("status", value)}
            />
          </div>
        </div>
      </div>
      <div className="my-2">
        <div>
          <label className="mb-2">
            <strong>Mô tả ngắn :</strong>
          </label>
          <br />
          <TextArea
            rows={4}
            placeholder="Độ dài tối đa 255 ký tự"
            maxLength={255}
            value={formik.values.short_description || ""}
            onChange={(event: any) =>
              setValueFormik("short_description", event.target.value)
            }
          />
        </div>
      </div>

      <Editor
        label="Nội dung bài viết"
        placeholder=""
        value={formik.values.content || ""}
        onEditorChange={(data) => setValueFormik("content", `${data}`)}
      />

      <div className="mt-4">
        <Button type="primary" onClick={formik.submitForm}>
          Lưu
        </Button>
        &emsp;
        <Button onClick={onClose}>Hủy</Button>
      </div>
    </Modal>
  );
};

export default EditBlogModal;
