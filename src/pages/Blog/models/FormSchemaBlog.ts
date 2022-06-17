import { MESSAGE_VALIDATE } from "config/message";
import * as Yup from "yup";

export const formSchemaBlog = Yup.object().shape({
  name: Yup.string().required(MESSAGE_VALIDATE.INPUT_NOT_EMPTY),
});
