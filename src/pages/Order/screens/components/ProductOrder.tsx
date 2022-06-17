import { Image } from 'antd'

import { NO_IMAGE } from 'config/constants'
import { OrderDetailModel } from 'pages/Order/models/OrderDetailModel'
import { formatMoney } from 'utils'

interface IProps{
  dataOrderDetail:OrderDetailModel
}

const ProductOrder = ({dataOrderDetail}:IProps) => {
  const properties = JSON.parse(dataOrderDetail.properties);

  return (
    <>
      <div className='d-flex'>
        <div>
          <Image src={dataOrderDetail.image || NO_IMAGE} width={100} height={100}/>
        </div>
        <div className='flex-grow-1' style={{marginLeft:30}}>
          <h6>{dataOrderDetail.product_name}</h6>
          <p>{formatMoney(dataOrderDetail.product_price)} | x{dataOrderDetail.product_quantity}</p>
          <p>Màu sắc: <b>{properties.color_name}</b> | Kích thước: <b>{properties.size.size_name}</b></p>
        </div>
      </div>
    </>
  )
}

export default ProductOrder
