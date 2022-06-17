import { useSelector } from 'setup';
import { Table, Tabs } from 'antd';
import { columns } from './DataColumnsUser';
import { useEffect, useState } from 'react';
import { ROLE_CODE } from 'config/constants';

const { TabPane } = Tabs;

const ListUser = () => {
  const listUser = useSelector((state) => state.account.ListAccount);
  const [dataTable, setDataTable] = useState<any[]>([]);
  const [formatData, setFormatData] = useState<any[]>([]);

  useEffect(() => {
    let data = listUser.results.map((item) => {
      return {
        key: item.id,
        avatar: item.avatar,
        role_code: item,
        email: item.email,
        full_name: item,
        address: item.address || '_ _ _',
        status: item.status,
        action: item,
      };
    });
    setFormatData(data);
    handleChangeTab(1);
  }, [listUser]);

  const handleChangeTab = (key: any) => {
    if (key == 1) {
      convertData([
        ROLE_CODE.ADMIN,
        ROLE_CODE.MANAGE_BLOG,
        ROLE_CODE.MANAGE_ORDER,
        ROLE_CODE.MANAGE_PRODUCT,
      ]);
    } else {
      convertData([ROLE_CODE.USER]);
    }
  };

  const convertData = (rolesCode: string[]) => {
    const filterData = formatData.filter((item) =>
      rolesCode.includes(item.role_code.role_code)
    );
    setDataTable(filterData);
  };

  return (
    <>
      <Tabs defaultActiveKey="1" onChange={handleChangeTab}>
        <TabPane tab="Tai khoản quản lý" key="1"></TabPane>
        <TabPane tab="Tài khoản khách hàng" key="2"></TabPane>
      </Tabs>
      <Table
        columns={columns}
        dataSource={dataTable}
        scroll={{ x: 1500, y: 680 }}
      />
    </>
  );
};

export default ListUser;
