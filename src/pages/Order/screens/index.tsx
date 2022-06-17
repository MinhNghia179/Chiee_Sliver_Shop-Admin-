import './order.style.scss'
import { useEffect }            from "react";
import { useDispatch }          from "react-redux";

import { getListOrderAction }   from "../redux/OrderActions";
import ListOrder                from "./components/ListOrder";

const Order = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListOrderAction());
  }, [])
  return (
    <>
      <ListOrder/>
    </>
  );
};

export default Order;
