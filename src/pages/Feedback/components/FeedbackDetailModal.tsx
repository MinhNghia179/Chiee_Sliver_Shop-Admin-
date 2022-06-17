import { Divider, Modal } from "antd";
import React from "react";
import { FeedbackModel } from "../models/FeedbackModel";

interface IProps {
  visible: boolean;
  data: FeedbackModel;
  onClose: () => void;
}

const FeedbackDetailModal = (props: IProps) => {
  const { visible, data, onClose } = props;
  return (
    <Modal
      title={`${data.name} - ${data.email}`}
      visible={visible}
      onCancel={onClose}
      footer={false}
      centered
    >
      <h5>{data.subject}</h5>
      <div style={{fontSize:20}}>{data.message}</div>
    </Modal>
  );
};

export default React.memo(FeedbackDetailModal);
