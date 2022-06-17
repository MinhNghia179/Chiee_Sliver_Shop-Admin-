import { Divider }          from "antd";

import { ProductModel }     from "pages/Product/models/ProductModel";
import { convertDateTime }  from "utils";

interface IProps {
  data: ProductModel;
}

const HistoryProductItem = ({ data }: IProps) => {
  return (
    <>
      <div>
        <p>
          <b>Ngày tạo:</b> {convertDateTime(data.created_at || "")}
        </p>
        <p>
          <b>Người tạo:</b> {data.created_by}
        </p>
      </div>
      {data.modified_at && (
        <>
          <Divider />
          <div>
            <p>
              <b>Ngày sửa:</b> {convertDateTime(data.modified_at || "")}
            </p>
            <p>
              <b>Người sửa:</b> {data.modified_by}
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default HistoryProductItem;
