import { useState, useEffect } from "react";
import { Table, Button, Tag } from "antd";
function Table1() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setDataSource(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  const columns: {
    title: string;
    dataIndex?: string;
    key: string;
    render?: (name: any) => JSX.Element;
    sorter?: (a: any, b: any) => number;
    filters?: { text: string; value: boolean }[];
    onFilter?: any;
  }[] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "1",
    },
    {
      title: "User ID",
      dataIndex: "userId",
      key: "2",
      sorter: (a, b) => a.userId - b.userId,
    },
    {
      key: "3",
      title: "Status",
      dataIndex: "completed",
      render: (completed) => <p>{completed ? "Completed" : "In Progress"}</p>,
      filters: [
        { text: "Completed", value: true },
        { text: "In Progress", value: false },
      ],
      onFilter: (value: any, record: any) => record.completed === value,
    },
    {
      key: "4",
      title: "title",
      dataIndex: "title",
    },
  ];
  
  return (
    <div>
      <Table
        columns={columns}
        loading={loading}
        dataSource={dataSource}
        pagination={{
          current: page,
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
      />
      <br />
    </div>
  );
}

export default Table1;
