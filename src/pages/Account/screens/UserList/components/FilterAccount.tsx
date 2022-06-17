import { Button } from "antd";
import { Input } from "antd";
import { useState } from "react";
import AddAccountModal from "./AddAccountModal";

const { Search } = Input;

const FilterAccount = () => {
  const [isShowModal,setIsShowModal] = useState(false);

  const handleOpenAddAccountModal = () => setIsShowModal(true);
  const handleCloseAddAccountModal = () => setIsShowModal(false);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <Search placeholder="Tìm kiếm người dùng " size="large" />
        </div>
        <div>
          <Button size="large" onClick={handleOpenAddAccountModal}>Thêm tài khoản</Button>
        </div>
      </div>
      {
        isShowModal && <AddAccountModal visible={isShowModal} onClose={handleCloseAddAccountModal}/>
      }
      
    </>
  );
};

export default FilterAccount;
