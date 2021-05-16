import React, { Component } from "react";
import { Form, Input } from "antd";
// 添加角色的标签
class AddForm extends Component {
  // onFinish = (value)=>{
  //   console.log(value);
  // }
  render() {
    return (
      <Form ref={this.props.formValue}>
        <Form.Item label="角色名称">
          <Form.Item
            initialValue=""
            noStyle
            name="role"
            rules={[{ required: true, message: "Province is required" }]}
          >
            <Input placeholder="请输入角色名称"></Input>
          </Form.Item>
        </Form.Item>
      </Form>
    );
  }
}

export default AddForm;