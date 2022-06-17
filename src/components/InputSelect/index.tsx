import { Select } from "antd";

const { Option } = Select;

interface IProps {
  label?:string;
  require?:boolean;
  data: any[];
  defaultValue?: any;
  errors?: any;
  touched?: any;
  placeholder?:string;
  onChangeValue: (value:any) => void;
}

const InputSelect = ({label,require = false, data,errors,touched, defaultValue,placeholder="",onChangeValue }: IProps) => {
  const checkTouchedError = touched && errors;

  return (
    <div className="mb-3">
      {label && <div className="mb-2"><b>{label} {require && <span className="text-danger">*</span>}</b></div>}
      <Select defaultValue={defaultValue} className='w-100' allowClear onChange={onChangeValue} placeholder={placeholder}>
        {data.map((item, index) => (
          <Option key={index} value={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>
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

export default InputSelect;
