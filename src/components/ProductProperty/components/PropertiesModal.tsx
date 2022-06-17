import { Button, Divider, Modal, Tooltip } from "antd";
import InputText from "components/Input/InputText";
import { useEffect, useState } from "react";
import { Row, Table } from "reactstrap";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { SketchPicker } from "react-color";
import _ from "lodash";
import uniqid from "uniqid";
import { ProductColorModel, ProductSizeModel } from "pages/Product/models/ProductPropertiesModel";

interface IProps {
  data?: ProductColorModel;
  isModalVisible: boolean;
  handleCancel: () => void;
  handleAddProperty: (item: any) => void;
}

const PropertiesModal = ({
  data,
  isModalVisible,
  handleCancel,
  handleAddProperty,
}: IProps) => {
  const [sizeIdEdit, setSizeIdEdit] = useState<string>("");
  const [colorName, setColorName] = useState<string>(data ? data.color_name : "Trắng");
  const [productSize, setProductSize] = useState<string>("");
  const [productAmount, setProductAmount] = useState<number>(0);
  const [amountColor, setAmountColor] = useState<number>(data ? data.amount : 0);
  const [size, setSize] = useState<ProductSizeModel[]>(data ? data.sizes : []);
  const [error, setError] = useState<any>({});
  const [title,setTitle] = useState<string>("");

  useEffect(() => {
    setTitle(data ? "Cập nhật thuộc tính": "Thêm thuộc tính");
  }, [data])

  const handleAddSizeProduct = () => {
    if (!productSize) {
      setError((prev: any) => {
        return {
          ...prev,
          size_name: "Không được để trống",
        };
      });
      return;
    }

    const data = {
      size_id: uniqid("size_id_"),
      size_name: productSize,
      amount: Number(productAmount),
    };
    setSize((prev) => [...prev, data]);
    setProductAmount(0);
    setProductSize("");
    setSizeIdEdit("");
    setError((prev: any) => {
      return {
        ...prev,
        size_name: "",
      };
    });
  };

  const handleUpdateSizeProduct = () => {
    if (!productSize) {
      setError((prev: any) => {
        return {
          ...prev,
          size_name: "Không được để trống",
        };
      });
      return;
    }

    const newSizes:ProductSizeModel[] = [...size];
    let indexOfItem = newSizes.findIndex(
      (element:ProductSizeModel) => element.size_id === sizeIdEdit
    );
    if (indexOfItem > -1) {
      newSizes[indexOfItem] = {
        ...newSizes[indexOfItem],
        size_name: productSize,
        amount: Number(productAmount),
      };

      setSize(newSizes);
      setProductAmount(0);
      setProductSize("");
      setSizeIdEdit("");
      setError((prev: any) => {
        return {
          ...prev,
          size_name: "",
        };
      });
    }
  };



  const handleDeleteSize = (item: any) => {
    let newSize = _.remove(size, (element) => element.size_id !== item.size_id);
    setSize(newSize);
  };

  const editSize = (item: any) => {
    setProductSize(item.size_name);
    setProductAmount(item.amount);
    setSizeIdEdit(item.size_id);
  };

  const handleSaveProperty = () => {
    if (!colorName) {
      setError((prev: any) => {
        return {
          ...prev,
          color_name: "Không được để trống",
        };
      });
      return;
    }
    const dataProperty:ProductColorModel = {
      id: data ? data.id : uniqid("property_id_"),
      color_name: colorName,
      sizes: size,
      amount: Number(amountColor|| 0),
    }
    handleAddProperty(dataProperty);
    handleCancel();
  };
  return (
    <>
      <Modal
        title={title}
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleSaveProperty}
        okText="Lưu"
        cancelText="Hủy"
        centered
        className="my-4"
      >
        <div>
          <InputText
            id="color"
            name="color"
            label="Màu sắc"
            placeholder=""
            value={colorName}
            onChangeValue={(e) => setColorName(e.target.value)}
            errors={error?.color_name}
            touched={error?.color_name}
            require={true}
          />
          <InputText
            id="color_amount"
            name="color_amount"
            label="Số lượng"
            placeholder=""
            type="number"
            min={0}
            value={amountColor}
            onChangeValue={(e) => setAmountColor(e.target.value)}
            disabled={size.length}
          />

          <Divider />
          <Row>
            <div className="col-md-6">
              <InputText
                id="size"
                name="size"
                label="Kích thước"
                placeholder="Nhập kích Thước"
                require={true}
                value={productSize}
                onChangeValue={(e) => setProductSize(e.target.value)}
                errors={error?.size_name}
                touched={error?.size_name}
              />
            </div>
            <div className="col-md-6">
              <InputText
                id="amount"
                name="amount"
                label="Số lượng sản phẩm"
                placeholder=""
                type="number"
                require={true}
                min={0}
                value={productAmount}
                onChangeValue={(e) => setProductAmount(e.target.value)}
              />
            </div>
          </Row>
          <div className="d-flex">
            <Button onClick={handleAddSizeProduct}>Thêm kích thước</Button>
            &emsp;
            <Button
              onClick={handleUpdateSizeProduct}
              disabled={sizeIdEdit === ""}
            >
              Cập nhật kích thước
            </Button>
          </div>

          {!!size.length && (
            <Table bordered className="mt-3">
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Số lượng</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {size.map((item, index) => (
                  <tr key={index}>
                    <td>{item.size_name}</td>
                    <td>{item.amount}</td>
                    <td>
                      <Tooltip title="Cập nhật">
                        <Button
                          type="text"
                          shape="circle"
                          icon={<EditOutlined />}
                          onClick={() => editSize(item)}
                        />
                      </Tooltip>
                      &emsp;
                      <Tooltip title="Xóa">
                        <Button
                          type="text"
                          shape="circle"
                          icon={<DeleteOutlined />}
                          onClick={() => handleDeleteSize(item)}
                        />
                      </Tooltip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </Modal>
    </>
  );
};

export default PropertiesModal;
