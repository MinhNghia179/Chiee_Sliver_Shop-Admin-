import { Image } from "antd";
import { NO_IMAGE } from "config/constants";

interface IProps {
  thumbnail: string;
}

const ThumbnailBlogItem = ({ thumbnail }: IProps) => {
  return (
    <>
      <Image
        src={thumbnail || NO_IMAGE}
        style={{ width: 100, height: 100, objectFit: "cover" }}
      />
    </>
  );
};

export default ThumbnailBlogItem;
