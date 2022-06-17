import { Image }                from "antd";
import { useEffect, useState }  from "react";

import { NO_IMAGE }             from "config/constants";
import { ProductImagesModel }   from "pages/Product/models/ProductImagesModel";

interface IProps {
  list_image: string;
}

const ImageProductItem = ({ list_image }: IProps) => {
  const [visibleImage, setVisibleImage] = useState<boolean>(false);
  const [dataImage, setDataImage] = useState<ProductImagesModel[]>([]);

  useEffect(() => {
    setDataImage(JSON.parse(list_image || "[]"));
  }, []);
  
  return (
    <>
      <Image
        preview={{ visible: false }}
        width={100}
        height={100}
        style={{ objectFit: "cover" }}
        src={dataImage.length ? dataImage[0]?.url : NO_IMAGE}
        onClick={() => setVisibleImage(true)}
      />
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{
            visible: visibleImage,
            onVisibleChange: (vis) => setVisibleImage(vis),
          }}
        >
          {dataImage.map((item, index) => (
            <Image
              key={index}
              src={item.url || ""}
              style={{ width: 100, height: 100 }}
            />
          ))}
        </Image.PreviewGroup>
      </div>
    </>
  );
};

export default ImageProductItem;
