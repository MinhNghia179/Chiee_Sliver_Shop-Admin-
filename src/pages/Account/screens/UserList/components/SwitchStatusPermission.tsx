import { Switch } from "antd"


interface IProps{
  defaultChecked:boolean;
}

const SwitchStatusPermission = ({defaultChecked}:IProps) => {
  return (
    <>
      <Switch checkedChildren="Kích hoạt" unCheckedChildren="Chặn" defaultChecked={defaultChecked}/>
    </>
  )
}

export default SwitchStatusPermission
