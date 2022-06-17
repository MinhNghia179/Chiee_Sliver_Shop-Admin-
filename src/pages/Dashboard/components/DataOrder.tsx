import { Card, Divider } from "antd";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useSelector } from "setup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOrderStatistical } from "../redux/DashboardActions";

const DataOrder = () => {
  const dispatch = useDispatch();
  const orderStatistical = useSelector(state => state.dashboard.ListOrderStatistical);

  useEffect(() => {
    dispatch(getOrderStatistical());
  }, []);

  return (
    <div className="col-md-6">
      <Card>
        <h4 className="mb-4">Thống kê đơn hàng theo tháng</h4>
        <LineChart
          width={750}
          height={300}
          data={orderStatistical}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="1 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </Card>
    </div>
  );
};

export default DataOrder;
