import { ProductCategoryModel } from "pages/ProductCategory/models/ProductCategoryModel";
import ActionCategoriesItem     from "./ActionCategoriesItem";
import ImageCategoriesItem      from "./ImageCategoriesItem";
import StatusCategoriesItem     from "./StatusCategoriesItem";

export const columnsProductCategory = [
  {
    title: "Ảnh đại diện",
    dataIndex: "thumbnail",
    key: "thumbnail",
    render: (thumbnail: string) => (
      <ImageCategoriesItem thumbnail={thumbnail} />
    ),
  },
  {
    title: "Tên danh mục",
    dataIndex: "category_name",
    key: "category_name",
  },
  {
    title: "Mã danh mục",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    render: (status: boolean) => <StatusCategoriesItem status={status} />,
  },
  {
    title: "Hành động",
    dataIndex: "action",
    key: "action",
    render: (data: ProductCategoryModel) => (
      <ActionCategoriesItem data={data} />
    ),
  },
];
