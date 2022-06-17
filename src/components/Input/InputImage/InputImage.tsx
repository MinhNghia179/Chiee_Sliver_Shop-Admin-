import "./InputImage.scss";
import { useMemo, useState } from "react";
import { CameraOutlined, CloseCircleTwoTone } from "@ant-design/icons";
import { Col, Row } from "antd";
import { getBase64Image } from "utils";
import { uploadFileAPI } from "services/uploadFileApi";
import _ from "lodash";

interface IProps{
  dataImages:any[],
  setDataImages: (item:any) => void
}

const InputImage = ({dataImages = [],setDataImages}:IProps) => {
  const handleChangeImage = (event: any) => {
    getBase64Image(event)
      .then((data: any) => {
        const payload = {
          file_name:data.file_name,
          base64:data.base64
        };
        uploadFileAPI(payload)
          .then((result) => {
            const id = Date.now();
            setDataImages([...dataImages, {
              id:id.toString(),
              url:result.url
            }]);
          })
          .catch((error) => {console.log(error)});
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const handleRemoveImage = (id: string) => {
    const data = [...dataImages];
    setDataImages(_.remove(data, (item) => { return item.id !== id}));
  };

  const renderImage = useMemo(() => {
    return (
      <Row gutter={16} className="mt-2">
        {dataImages.map((item) => (
          <Col className="gutter-row item-preview" span={12} key={item.id}>
            <span
              className="item-preview__remove"
              onClick={() => handleRemoveImage(item.id)}
            >
              <CloseCircleTwoTone />
            </span>
            <img src={item.url} className="item-preview__image" />
          </Col>
        ))}
      </Row>
    );
  }, [dataImages]);

  return (
    <div className="mb-3 input-list-image">
      <label className="mb-2">
        <strong>Chọn ảnh sản phẩm</strong>
      </label>
      <br />
      <input
        type="file"
        id="input-image"
        hidden
        onChange={(event) => handleChangeImage(event)}
      />
      <label htmlFor="input-image" className="label-input">
        <CameraOutlined />
        &ensp;<span>Chọn ảnh</span>
      </label>
      {renderImage}
    </div>
  );
};

export default InputImage;
