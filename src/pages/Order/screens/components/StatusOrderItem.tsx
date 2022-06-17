import { OrderStatusModel } from "pages/Order/models/OrderStatusModel"
import { getStatusName } from "utils"

interface IProps{
  status:OrderStatusModel[]
}

const StatusOrderItem = ({status}:IProps) => {
  return (
    <>
      {getStatusName(status[0].status_code)}
    </>
  )
}

export default StatusOrderItem
