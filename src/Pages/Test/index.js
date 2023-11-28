import { Fragment, useState } from "react";
import { Link, useSearchParams, createSearchParams } from "react-router-dom";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import { Button, Flex, Col, Row, Checkbox, Form, Input } from "antd";

const data = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function Test() {
  const [loading, setLoading] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());
  console.log(params);
  //   for (const entry of searchParams.entries()) {
  //     console.log(entry);
  //     params.push(entry);
  //   }
  const renderFarm = data.map((item) => {
    if (inStockOnly && !item.stocked) {
      return;
    }
    return (
      <div className="item" key={item.name}>
        {item.name}
      </div>
    );
  });
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <PrimaryLayout>
      <div className="content">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Row>
          <Col span={2}>col-8</Col>
          <Col span={2}>col-8</Col>
          <Col span={10}>col-8</Col>
          <Col span={10}>col-8</Col>
        </Row>
        <Flex gap={100} wrap="wrap">
          <Button type="primary" size={"large"}>
            Primary Button
          </Button>
          <Button type="primary" size={"large"}>
            Primary Button
          </Button>
          <Button type="primary" size={"large"}>
            Primary Button
          </Button>
        </Flex>
        <form>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
          />
          <span>show only in stock</span>
        </form>

        <div className="test">{renderFarm}</div>
        <Link
          to={{
            pathname: "/",
            search: `?${createSearchParams({ sort: "name" })}`,
          }}
        >
          go to home
        </Link>
        <button onClick={(e) => setSearchParams({ ...params, term: "milad" })}>
          term
        </button>
      </div>
    </PrimaryLayout>
  );
}
