import { AccountModel } from "pages/Account/models/AccountModel"
import { useSelector } from "setup"
import { getFullName } from "utils"

interface IProps{
  data:AccountModel
}
const NameAccountsItem = ({data}:IProps) => {
  const userInfo = useSelector(state => state.auth.user_info);

  return (
    <>
      {getFullName(data.first_name, data.last_name)} {userInfo?.id === data.id && <b> ( Bạn ) </b>}
    </>
  )
}

export default NameAccountsItem
