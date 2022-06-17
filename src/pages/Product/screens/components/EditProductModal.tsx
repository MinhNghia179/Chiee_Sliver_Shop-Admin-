import { Modal } from 'antd';

import { ProductModel } from 'pages/Product/models/ProductModel';
import FormEditProduct from './FormEditProduct';

interface IProps {
  title: string;
  visible: boolean;
  data?: ProductModel;
  onCancel: () => void;
}

const EditProductModal = (props: IProps) => {
  const { title, visible, data, onCancel } = props;

  return (
    <>
      <Modal
        title={title.toUpperCase()}
        centered
        visible={visible}
        onCancel={onCancel}
        width={1500}
        footer={null}
        className="my-4"
      >
        <FormEditProduct onCancelEdit={onCancel} data={data} />
      </Modal>
    </>
  );
};

export default EditProductModal;
