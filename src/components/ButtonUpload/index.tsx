import "./button-upload.style.scss";
import { useCallback, useState }          from "react";
import { LoadingOutlined, PlusOutlined }  from "@ant-design/icons";
import { Upload }                         from "antd";

import { uploadFileAPI }                  from "services/uploadFileApi";

interface IProps{
  imageUrl  :string | null;
  setUrl    :(url:string|null)=>void
}

const ButtonUpload = ({imageUrl,setUrl}:IProps) => {
  const [loading, setLoading] = useState(false);

  const uploadButton = () => (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const getBase64 = (img: any, callback: any) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const handleChange = useCallback((info: any) => {
    setLoading(true);
    getBase64(info.file.originFileObj, (imageUrl: any) => {
      const payload = {
        file_name:info.file.name,
        base64:imageUrl
      };
      uploadFileAPI(payload)
        .then((result) => {
          setTimeout(() => {
            setLoading(false);
            setUrl(result.url);
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        });
    });
  }, []);

  return (
    <>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        onChange={handleChange}
      >
        {imageUrl && !loading ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton()
        )}
      </Upload>
    </>
  );
};

export default ButtonUpload;
