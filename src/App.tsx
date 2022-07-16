import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";
import React, { useState } from "react";
import AntD from "./components/AntD";
import Table1 from "./components/Table1";
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  grade: string;
  render?: (data: any) => JSX.Element;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Grade",
    dataIndex: "grade",
    render: (grade: any) => {
      const color: string = grade.includes("A")
        ? "green"
        : grade.includes("B")
        ? "cyan"
        : grade.includes("C")
        ? "orange"
        : grade.includes("F")
        ? "red"
        : grade.includes("A+")
        ? "green"
        : "red";
      return (
        <Tag color={color} key={grade}>
          {grade}
        </Tag>
      );
    },
  },
  {
    title: "Age",
    dataIndex: "age",
  },
];

const data: DataType[] = [
  {
    key: 1,
    name: "Osama",
    age: 20,
    address: "gaza",
    grade: "A+",
  },
  {
    key: 2,
    name: "Husam",
    age: 19,
    address: "gaza",
    grade: "C",
  },
  {
    key: 3,
    name: "Ali",
    age: 40,
    address: "gaza",
    grade: "B",
  },
];

const App: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  return (
    <>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      <Table1 />
      <AntD/>
    </>
  );
};

export default App;
