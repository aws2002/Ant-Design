import React from "react";
import { StepBackwardOutlined } from "@ant-design/icons";
import MultilanguageBtn from "../Tools/MultilanguageBtn";
import { Select, Button, Form, Input, Table, message, Typography } from "antd";
function AntD() {
  interface FormData {
    password: number | string;
  }
  const fruits: string[] = ["test1", "test2", "test3", "test4"];
  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("Test");

  const loadingE = (e: React.MouseEvent<HTMLElement>) => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };
  const onFinish = (e: FormData) => {
    console.log(e);
    setTimeout(() => message.success("Login success"), 2000);
  };
  const dataSource: {
    key: string;
    name: string;
    age: number;
    address: string;
  }[] = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 19,
      address: "10 Downing Street",
    },
  ];
  const columns: {
    title: string;
    dataIndex?: string;
    key: string;
    render?: (name: any) => JSX.Element;
    sorter?: (a: any, b: any) => number;
  }[] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => {
        return <a href="">{name}</a>;
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Graduated",
      key: "graduated",
      render: (payload) => {
        return <p>{payload.age > 20 ? "T" : "F"}</p>;
      },
    },
  ];
  return (
    <div className="App">
      <h1 className="text-6xl">osama</h1>
      <MultilanguageBtn />
      <Button type="primary" loading={loading} onClick={loadingE}>
        Button
      </Button>
      <br />
      <Button type="dashed" ghost>
        Dashed
      </Button>
      <br />
      <Button type="primary" icon={<StepBackwardOutlined />}>
        Button
      </Button>
      <br />
      <Select className="w-64">
        {fruits.map((item, index) => (
          <Select.Option key={index}>{item}</Select.Option>
        ))}
      </Select>
      <br />
      <br />
      <Select
        placeholder="select"
        mode="multiple"
        maxTagCount={2}
        className="w-64"
        allowClear
      >
        {fruits.map((item, index) => (
          <Select.Option key={index}>{item}</Select.Option>
        ))}
      </Select>
      <br />
      <Form onFinish={onFinish}>
        <Form.Item name="password">
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </Form>
      <br />
      <br />
      <Typography.Paragraph
        editable={{
          onChange: (val) => {
            setText(val);
          },
          
        }}
        strong
      >
        {text}
      </Typography.Paragraph>
      <br />
      <br />
    </div>
  );
}

export default AntD;
