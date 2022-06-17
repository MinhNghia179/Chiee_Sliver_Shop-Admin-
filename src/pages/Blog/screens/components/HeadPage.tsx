import { Button, Input } from "antd";
import { useState } from "react";
import EditBlogModal from "./EditBlogModal";

const { Search } = Input;

const HeadPage = () => {
  const [isOpenAddBlog, setIsOpenEditBlog] = useState<boolean>(false);

  const handleOpenEditBlog = () => {
    setIsOpenEditBlog(true);
  };

  const handleCloseEditBlog = () => {
    setIsOpenEditBlog(false);
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <div><Search placeholder="Tìm kiếm bài viết " size="large" /></div>
        <div>
          <Button onClick={handleOpenEditBlog} size="large">Thêm bài viết</Button>
        </div>
      </div>
      {isOpenAddBlog && (
        <EditBlogModal
          title="Thêm bài viết mới"
          visible={isOpenAddBlog}
          onClose={handleCloseEditBlog}
        />
      )}
    </>
  );
};

export default HeadPage;
