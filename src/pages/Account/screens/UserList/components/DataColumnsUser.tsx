import { Image, Tag }                 from "antd";

import { AVATAR_DEFAULT, LIST_ROLE }  from "config/constants";
import { AccountModel }               from "pages/Account/models/AccountModel";
import ActionAccountsItem             from "./ActionAccountsItem";
import NameAccountsItem               from "./NameAccountsItem";
import RoleAccountItem                from "./RoleAccountItem";

export const columns = [
  {
    title: "Ảnh địa diện",
    dataIndex: "avatar",
    key: "avatar",
    width:150,
    render: (avatar: string) => (
      <>
        <Image src={avatar || AVATAR_DEFAULT} style={{ width: 70 }} />
      </>
    ),
  },
  {
    title: "Tên",
    dataIndex: "full_name",
    key: "full_name",
    render: (item:AccountModel) => <NameAccountsItem data={item}/>
  },
  {
    title: "Vai trò",
    dataIndex: "role_code",
    key: "role_code",
    filters: LIST_ROLE,
    onFilter: (value:any, record:any) => {
      return record.role_code?.role_code === value;
    },
    filterSearch: true,
    render:(item:AccountModel) => <RoleAccountItem roleCode={item.role_code}/>
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    width:120,
    render: (status: boolean) => (
      <>
        {status ? (
          <Tag color="green">Hoạt động</Tag>
        ) : (
          <Tag color="red">Khóa</Tag>
        )}
      </>
    ),
  },
  {
    title: "Hành động",
    dataIndex: "action",
    key: "action",
    render: (item: AccountModel) => <ActionAccountsItem data={item} />,
  },
];
