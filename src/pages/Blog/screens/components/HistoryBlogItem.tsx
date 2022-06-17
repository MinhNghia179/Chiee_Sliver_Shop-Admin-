import { BlogModel } from "pages/Blog/models/BlogModel";
import { convertDate, convertDateTime, getFullName } from "utils";

interface IProps {
  data: BlogModel;
}
const HistoryBlogItem = ({ data }: IProps) => {
  return (
    <>
      <ul>
        <li>
          Ngày tạo: <b>{convertDateTime(data.created_at)}</b>
        </li>
        <li>
          Người tạo: <b>{data.created_by}</b>
        </li>
        {data.modified_at && (
          <>
            <li>
              Ngày sửa: <b>{convertDateTime(data.modified_at)}</b>
            </li>
            <li>
              Người sửa: <b>{data.modified_by}</b>
            </li>
          </>
        )}
      </ul>
    </>
  );
};

export default HistoryBlogItem;
