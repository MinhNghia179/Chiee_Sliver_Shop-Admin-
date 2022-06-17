import { Form, Input, InputNumber } from "antd";

interface IProps {
  isViewComment?: boolean;
  label?: string;
  value: any;
  isComment?: boolean;
  openAddComment?: () => void;
  name: string;
  id: string;
  type?: string;
  touched?: any;
  errors?: any;
  placeholder: string;
  onChangeValue?: (e: any) => void;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  style?: any;
  min?: any;
  onKeyDown?: any;
  as?: any;
  disabled?: any;
  max?: any;
  hasDot?: boolean;
  isNumber?: boolean;
  isViewPage?: boolean;
  format?: string;
  thousandsGroupStyle?: any;
  decimalScale?: number;
  isOther?: boolean;
  className?: any;
  require?: boolean;
}

const InputText = (props: IProps) => {
  const {
    value,
    label,
    touched,
    errors,
    hasDot,
    disabled,
    name,
    min,
    max,
    isNumber,
    isViewPage,
    onChangeValue,
    isOther = false,
    className,
    require = false,
    placeholder,
  } = props;

  const checkTouchedError = touched && errors;

  return (
    <div className="mb-3">
      {label && (
        <label className="mb-2">
          <strong>{label} {require && <span className="text-danger"> * </span>}</strong>
        </label>
      )}
      {isNumber ? (
        <InputNumber
        {...props}
          min={min}
          max={max}
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={onChangeValue}
        />
      ) : (
        <Input
          {...props}
          placeholder={placeholder}
          allowClear
          className={className}
          min={min}
          max={max}
          value={value}
          onChange={onChangeValue}
        />
      )}
      {checkTouchedError && (
        <div className="mt-2">
          <div className="" style={{ color: "red" }}>
            {errors}
          </div>
        </div>
      )}
    </div>
  );
};

export default InputText;
