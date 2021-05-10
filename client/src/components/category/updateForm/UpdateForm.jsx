import React, { Component } from "react";
import { Form, Input } from "antd";
// 修改类目的标签
class UpdateForm extends Component {
  render() {
    const { categoryName } = this.props;
    return (
      <Form>
        <Form.Item label="分类名称">
          <Form.Item
            noStyle
            rules={[{ required: true, message: "Province is required" }]}
          >
            <Input
              placeholder="请输入分类名称"
              defaultValue={categoryName}
            ></Input>
          </Form.Item>
        </Form.Item>
      </Form>
    );
  }
}

export default UpdateForm;
