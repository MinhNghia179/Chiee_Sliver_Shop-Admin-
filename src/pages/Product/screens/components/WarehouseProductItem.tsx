import { useEffect, useState } from "react"

interface IProps{
  properties:any[]
}

const WarehouseProductItem = ({properties}:IProps) => {
  const [amount,setAmount] = useState<number>(0);

  useEffect(() => {
    let countAmount = 0;
    properties.forEach(element => {
      let sizes = element.sizes || [];
      if(!sizes.length){
        countAmount+=(Number(element.amount) || 0);
      }else{
        sizes.forEach((size:any) => {
          countAmount+=(Number(size.amount) || 0);
        })
      }
    })
    setAmount(countAmount);
  }, [properties])


  return (
    <b>
      {amount} SP
    </b>
  )
}

export default WarehouseProductItem
