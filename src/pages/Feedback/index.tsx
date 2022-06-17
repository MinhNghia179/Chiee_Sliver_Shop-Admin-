import './feedback.style.scss';
import LoadingTable from "components/LoadingTable";
import ListFeedback from "./components/ListFeedback";
import { useEffect, useState } from 'react';

const Feedback = () => {
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      setLoading(false);
    }
  }, [])

  return <>{loading ? <LoadingTable /> : <ListFeedback />}</>;
};

export default Feedback;
