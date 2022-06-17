import { useMemo }    from "react";
import { LIST_ROLE }  from "config/constants";

interface IProps{
  roleCode:string
}

const RoleAccountItem = ({roleCode} : IProps) => {

  const getRoleName = useMemo(() => {
    const role = LIST_ROLE.filter(item => item.value === roleCode);
    if(!!role.length){
      return role[0].text;
    }
    return "";
  },[roleCode])

  return <div>{getRoleName}</div>;
};

export default RoleAccountItem;
