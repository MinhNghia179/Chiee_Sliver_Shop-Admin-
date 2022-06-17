import "./blog.style.scss";
import { Divider } from "antd";
import HeadPage from "./components/HeadPage";
import ListBlog from "./components/ListBlog";

const Blog = () => {
  return (
    <>
      <HeadPage />
      <Divider />
      <ListBlog/>
    </>
  );
};

export default Blog;
