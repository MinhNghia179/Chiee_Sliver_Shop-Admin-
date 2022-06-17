import { MESSAGE_VALIDATE } from "config/message";
import * as Yup from "yup";

export const formSchemaProductCategory = Yup.object().shape({
  name: Yup.string().required(MESSAGE_VALIDATE.PRODUCT_CATEGORY_NAME),
});
