import { message } from 'antd';

export const toastSuccess = (text:string) => {
  message.success(text);
};

export const toastError = (text:string) => {
  message.error(text);
};

export const toastWarning = (text:string) => {
  message.warning(text);
};

export const toastInfo = (text:string) => {
  message.info(text);
};