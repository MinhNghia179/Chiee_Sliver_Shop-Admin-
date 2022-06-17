import { Skeleton } from "antd";

interface IProps {
  row?: number;
}
const LoadingTable = ({ row = 10 }: IProps) => {
  const list = Array.from(Array(row).keys()).map((_, index) => ({ id: index }));

  return (
    <>
      {list.map((item) => (
        <Skeleton.Button
          active={true}
          block={true}
          className="mb-1"
          key={item.id}
          style={{ height: 50 }}
        />
      ))}
      <div style={{float:'right'}}>
        <Skeleton.Button
          active={true}
          block={true}
          className="mb-1"
          key="page"
          style={{ height: 50, width: 300 }}
        />
      </div>
    </>
  );
};

export default LoadingTable;
