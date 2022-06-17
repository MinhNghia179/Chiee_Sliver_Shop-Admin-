import { Pagination } from "antd";

interface IProps{
  currentPage:number;
  totalItem:number;
  pageChange: (page:any, pageSize:any) => void;
}

const Index = ({currentPage = 0,totalItem=10,pageChange}:IProps) => {

  return (
    <>
      <Pagination
        showSizeChanger
        onChange={pageChange}
        defaultCurrent={currentPage+1}
        total={totalItem}
      />
    </>
  );
};

export default Index;
