import { MESSAGE_VALIDATE } from "config/message";
import * as Yup from "yup";

export const formSchemaProduct = Yup.object().shape({
  name: Yup.string().required(MESSAGE_VALIDATE.PRODUCT_NAME),
  category_id: Yup.number().required(MESSAGE_VALIDATE.PRODUCT_CATEGORY),
  status:Yup.boolean()
});
