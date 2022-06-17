import { BlogModel } from "pages/Blog/models/BlogModel";
import ActionBlogItem from "./ActionBlogItem";
import HistoryBlogItem from "./HistoryBlogItem";
import StatusBlogItem from "./StatusBlogItem";
import ThumbnailBlogItem from "./ThumbnailBlogItem";

export const columns = [
  {
    title: "Ảnh đại diện",
    dataIndex: "thumbnail",
    key: "thumbnail",
    width:150,
    render: (thumbnail: string) => <ThumbnailBlogItem thumbnail={thumbnail} />,
  },
  {
    title: "Tiêu đề",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Lịch sử",
    dataIndex: "history",
    key: "history",
    width:350,
    render:(blog:BlogModel) => <HistoryBlogItem data={blog}/>
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    width:120,
    render: (status: boolean) => <StatusBlogItem status={status} />,
  },
  {
    title: "Hành động",
    dataIndex: "action",
    key: "action",
    width: 250,
    render: (blog: BlogModel) => <ActionBlogItem data={blog} />,
  },
];
