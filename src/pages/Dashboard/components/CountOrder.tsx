import { Card } from "antd";
import {
  BarChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Legend,
} from "recharts";
import { useDispatch } from "react-redux";
import { useSelector } from "setup";
import { useEffect } from "react";
import { getOrderStatusStatistical } from "../redux/DashboardActions";

const CountOrder = () => {
  const dispatch = useDispatch();
  const orderStatusStatistical = useSelector(state => state.dashboard.ListOrderStatusStatistical);

  useEffect(() => {
    dispatch(getOrderStatusStatistical());
  }, []);

  return (
    <div className="col-md-6">
      <Card>
        <h4 className="mb-4">Thống kế trạng thái đơn hàng</h4>
        <BarChart
          width={790}
          height={300}
          data={orderStatusStatistical}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <CartesianGrid stroke="#ccc" strokeDasharray="1 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </Card>
    </div>
  );
};

export default CountOrder;
