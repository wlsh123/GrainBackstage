import React, { Component } from "react";
import { Form, Select, Input } from "antd";
// 添加类目的标签
const { Option } = Select;
class AddForm extends Component {
  render() {
    return (
      <Form>
        <Form.Item label="所属类目">
          <Form.Item
            name={["address", "province"]}
            noStyle
            initialValue="0"
            rules={[{ required: true, message: "Province is required" }]}
          >
            <Select
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="0">一级分类</Option>
              <Option value="1">电器</Option>
              <Option value="2">家具</Option>
            </Select>
          </Form.Item>
        </Form.Item>
        <Form.Item label="分类名称">
          <Form.Item
            initialValue=""
            noStyle
            rules={[{ required: true, message: "Province is required" }]}
          >
            <Input placeholder="请输入分类名称"></Input>
          </Form.Item>
        </Form.Item>
      </Form>
    );
  }
}

export default AddForm;
