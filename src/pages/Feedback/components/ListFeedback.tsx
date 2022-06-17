import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'setup';
import { convertDateTime } from 'utils';
import { FeedbackModel } from '../models/FeedbackModel';
import { columnsFeedback } from './DataColumnsFeedback';

const ListFeedback = () => {
  const feedbacks = useSelector((state) => state.feedback.ListFeedback);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const dataFormat = feedbacks.results.map((item: FeedbackModel) => {
      return {
        key: item.id,
        name: item.name,
        email: item.email,
        subject: item.subject,
        created_at: convertDateTime(item.created_at),
        action: item,
        status: item.status,
      };
    });
    setData(dataFormat);
  }, [feedbacks]);

  return (
    <>
      <Table
        columns={columnsFeedback}
        dataSource={data}
        scroll={{ x: 1500, y: 680 }}
        rowClassName={(record, index) => {
          return !record.status ? 'un_read_feedback' : 'read_feedback';
        }}
      />
    </>
  );
};

export default ListFeedback;
