import { ORDER_STATUS } from 'config/constants';
import moment from 'moment';

export const convertFileName = (fileName: string) => {
  const date = new Date();
  let result = `${date.getTime()}`;
  let imageType: string = fileName.slice(
    fileName.lastIndexOf('.'),
    fileName.length
  );
  result += imageType;
  return result;
};

export const getBase64Image = (event: any) => {
  let result = {
    file_name: '',
    base64: '',
    size: 0,
  };
  let file: any = null;
  file = event.target.files[0];

  return new Promise((resolve, reject) => {
    if (file === null) reject('No Image');
    result.file_name = file.name;
    result.size = file.size;

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      result.base64 = e.target.result;
      resolve(result);
    };
  });
};

export const slug = (title: string) => {
  let slug = title.toLowerCase();

  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
  slug = slug.replace(/đ/gi, 'd');

  slug = slug.replace(
    /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\"|\"|\:|\;|_/gi,
    ''
  );

  slug = slug.replace(/ /gi, '-');

  slug = slug.replace(/\-\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-/gi, '-');
  slug = slug.replace(/\-\-/gi, '-');

  slug = '@' + slug + '@';
  slug = slug.replace(/\@\-|\-\@|\@/gi, '');
  return slug;
};

export const isEmptyObject = (object: any) => {
  return Object.keys(object).length === 0;
};

export const convertDate = (time: string) => {
  if (!time) return '';
  let utc = moment(time).format('DD/MM/YYYY');
  return utc;
};

export const convertDateTime = (time: string) => {
  if (!time) return '';
  let utc = moment(time).format('HH:mm DD/MM/YYYY');
  return utc;
};

export const formatNumber = (number: any) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatMoney = (number: any) => {
  return `${formatNumber(number)} VNĐ`;
};

export const getFullName = (first_name: string, last_name: string) => {
  let full_name = '';
  if (last_name) {
    full_name += `${last_name} `;
  }
  if (first_name) {
    full_name += first_name;
  }

  return full_name || '_ _ _';
};

export const getStatusName = (status_code: string): string => {
  let status_name = '';
  switch (status_code) {
    case ORDER_STATUS.WAIT_CONFIRM.CODE:
      status_name = ORDER_STATUS.WAIT_CONFIRM.NAME;
      break;
    case ORDER_STATUS.CANCEL.CODE:
      status_name = ORDER_STATUS.CANCEL.NAME;
      break;
    case ORDER_STATUS.CONFIRM.CODE:
      status_name = ORDER_STATUS.CONFIRM.NAME;
      break;
    case ORDER_STATUS.DELIVERY.CODE:
      status_name = ORDER_STATUS.DELIVERY.NAME;
      break;
    case ORDER_STATUS.SUCCESSFUL_DELIVERY.CODE:
      status_name = ORDER_STATUS.SUCCESSFUL_DELIVERY.NAME;
      break;
    default:
      status_name = '';
  }
  return status_name;
};
