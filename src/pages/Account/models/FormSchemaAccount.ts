import { REGEX_PHONE_NUMBER } from "config/constants";
import { MESSAGE_VALIDATE } from "config/message";
import * as Yup from "yup";

export const formSchemaCreateAccount = Yup.object().shape({
  email       : Yup.string().email(MESSAGE_VALIDATE.ERROR_EMAIL).required(MESSAGE_VALIDATE.INPUT_NOT_EMPTY),
  password    : Yup.string().min(6, MESSAGE_VALIDATE.MIN_6).required(MESSAGE_VALIDATE.INPUT_NOT_EMPTY),
  first_name  : Yup.string().required(MESSAGE_VALIDATE.INPUT_NOT_EMPTY),
  last_name   : Yup.string().required(MESSAGE_VALIDATE.INPUT_NOT_EMPTY),
  role_code   : Yup.string().required(MESSAGE_VALIDATE.INPUT_NOT_EMPTY),
  phone_number: Yup.string().matches(REGEX_PHONE_NUMBER,MESSAGE_VALIDATE.ERROR_PHONE_NUMBER)
});

export const formSchemaUpdateAccount = Yup.object().shape({
  first_name  : Yup.string().required(MESSAGE_VALIDATE.INPUT_NOT_EMPTY),
  last_name   : Yup.string().required(MESSAGE_VALIDATE.INPUT_NOT_EMPTY),
  role_code   : Yup.string().required(MESSAGE_VALIDATE.INPUT_NOT_EMPTY),
  phone_number: Yup.string().matches(REGEX_PHONE_NUMBER,MESSAGE_VALIDATE.ERROR_PHONE_NUMBER)
});

export const formSchemaCreatePassword = Yup.object().shape({
  id        : Yup.number().required(MESSAGE_VALIDATE.INPUT_NOT_EMPTY),
  password  : Yup.string().min(6, MESSAGE_VALIDATE.MIN_6).required(MESSAGE_VALIDATE.INPUT_NOT_EMPTY),
});
