import { useState }             from "react";
import { Button }               from "antd";

import EditProductCategoryModal from "./EditProductCategoryModal";

const HeadPage = () => {
  const [isShowEditProductCategory, setIsShowProductCategory] = useState(false);

  const handleOpenEditProductCategory = () => setIsShowProductCategory(true);
  
  const handleCloseEditProductCategory = () => setIsShowProductCategory(false);

  return (
    <>
      <div className="d-flex justify-content-between">
        <div>
          <Button onClick={handleOpenEditProductCategory}>Thêm danh mục</Button>
        </div>
      </div>
      {isShowEditProductCategory && (
        <EditProductCategoryModal
          title="Thêm danh mục sản phẩm"
          visible={isShowEditProductCategory}
          onCancel={handleCloseEditProductCategory}
        />
      )}
    </>
  );
};

export default HeadPage;
