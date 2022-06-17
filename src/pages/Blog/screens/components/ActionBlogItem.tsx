import { Button, Popconfirm, Tooltip } from "antd";
import { BlogModel } from "pages/Blog/models/BlogModel";
import {
  FormOutlined,
  DeleteOutlined,
  CopyOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useState } from "react";
import EditBlogModal from "./EditBlogModal";
import PreviewBlogModal from "./PreviewBlogModal";
import {
  deleteBlogAction,
  duplicateBlogAction,
  getListBlogAction,
} from "pages/Blog/redux/BlogActions";
interface IProps {
  data: BlogModel;
}

const ActionBlogItem = ({ data }: IProps) => {
  const dispatch = useDispatch();
  const [isShowEditBlog, setIsShowBlog] = useState<boolean>(false);
  const [isShowPreviewBlog, setIsShowPreviewBlog] = useState<boolean>(false);

  const handleOpenEditBlog = () => setIsShowBlog(true);
  const handleCloseEditBlog = () => setIsShowBlog(false);
  const handleOpenPreviewBlog = () => setIsShowPreviewBlog(true);
  const handleClosePreviewBlog = () => setIsShowPreviewBlog(false);
  const confirmDelete = () => {
    dispatch(
      deleteBlogAction(data.id, () => {
        const payload = {
          page: 0,
          pageSize: 10,
        };
        dispatch(getListBlogAction(payload));
      })
    );
  };

  const handleDuplicateBlog = () => {
    const payload = {
      id: data.id || 0,
    };
    dispatch(
      duplicateBlogAction(payload, () => {
        const payload = {
          page: 0,
          pageSize: 10,
        };
        dispatch(getListBlogAction(payload));
      })
    );
  };
  return (
    <>
      <div className="d-flex justify-content-around">
        <Tooltip title="Xem bài viết" placement="bottom">
          <Button
            type="text"
            onClick={handleOpenPreviewBlog}
            icon={<EyeOutlined style={{ fontSize: 20 }} />}
          />
        </Tooltip>
        <Tooltip title="Nhân bản bài viết" placement="bottom">
          <Button
            type="text"
            onClick={handleDuplicateBlog}
            icon={<CopyOutlined style={{ fontSize: 20 }} />}
          />
        </Tooltip>
        <Tooltip title="Cập nhật bài viết" placement="bottom">
          <Button
            type="text"
            onClick={handleOpenEditBlog}
            icon={<FormOutlined style={{ fontSize: 20 }} />}
          />
        </Tooltip>

        <Popconfirm
          title="Xác nhận xóa bài viết"
          onConfirm={confirmDelete}
          onVisibleChange={() => console.log("visible change")}
          okText="Xóa"
          cancelText="Hủy"
          placement="topRight"
        >
          <Tooltip title="Xóa bài viết" placement="bottom">
            <Button
              type="text"
              danger
              icon={<DeleteOutlined style={{ fontSize: 20 }} />}
            />
          </Tooltip>
        </Popconfirm>
      </div>
      {isShowEditBlog && (
        <EditBlogModal
          title="Cập nhật bài viết"
          visible={isShowEditBlog}
          onClose={handleCloseEditBlog}
          data={data}
        />
      )}
      <PreviewBlogModal
        title="Chi tiêt bài viết"
        visible={isShowPreviewBlog}
        onCancel={handleClosePreviewBlog}
        data={data}
      />
    </>
  );
};

export default ActionBlogItem;
