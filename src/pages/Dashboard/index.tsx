import './dashboard.style.scss';
import Clock from 'react-live-clock';
import { Row } from 'reactstrap';
import DataOrder from './components/DataOrder';
import CountOrder from './components/CountOrder';
import ProductBestSelling from './components/ProductBestSelling';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div style={{ fontSize: 35 }} className="d-flex justify-content-center">
        <Clock
          format={'dddd, MMMM Do YYYY, h:mm:ss a'}
          ticking={true}
          timezone={'Asia/Ho_Chi_Minh'}
        />
      </div>
      <Row className="mt-4">
        <CountOrder />
        <DataOrder />
      </Row>

      <Row className="mt-4">
        <ProductBestSelling />
      </Row>
    </div>
  );
};

export default Dashboard;
