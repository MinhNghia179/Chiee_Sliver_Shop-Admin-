import "./user-list.style.scss"
import { Divider } from 'antd'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "setup"

import LoadingTable from "components/LoadingTable"
import { getListAccountAction } from "pages/Account/redux/AccountActions"
import FilterAccount from "./components/FilterAccount"
import ListUser from "./components/ListUser"

const UserList = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.common.loading);
  const userInfo = useSelector(state => state.auth.user_info);

  useEffect(() => {
    const payload = {
      id:userInfo?.id,
      role_code:""
    }
    dispatch(getListAccountAction(payload));
  }, []);

  return (
    <>
      <FilterAccount />
      <Divider />
      {loading ? <LoadingTable /> : <ListUser />}
    </>
  )
}

export default UserList