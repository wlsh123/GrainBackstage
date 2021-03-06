import React, { Component } from "react";
import { Form, Input } from "antd";
import { PropTypes } from "prop-types";
// 修改类目的标签
class UpdateForm extends Component {
  static propTypes = {
    categoryName: PropTypes.string,
  };
  render() {
    const { categoryName } = this.props;
    return (
      <Form ref={this.props.formValue} initialValues={{ categoryName }}>
        <Form.Item label="分类名称">
          <Form.Item
            noStyle
            rules={[{ required: true, message: "分类名称是必填" }]}
            name="categoryName"
          >
            <Input placeholder="请输入分类名称"></Input>
          </Form.Item>
        </Form.Item>
      </Form>
    );
  }
}

export default UpdateForm;
