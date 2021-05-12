import React, { Component } from "react";
import { Form, Input } from "antd";
import { PropTypes } from "prop-types";
// 修改类目的标签
class UpdateForm extends Component {
  static propTypes = {
    categoryName: PropTypes.string,
  };
  UNSAFE_componentWillMount() {}
  render() {
    const { categoryName } = this.props;
    return (
      <Form ref={this.props.formValue} initialValues={{ categoryName }}>
        <Form.Item label="分类名称">
          <Form.Item
            noStyle
<<<<<<< HEAD
            rules={[{ required: true, message: "请填写分类名称" }]}
=======
            rules={[{ required: true, message: "分类名称是必填" }]}
>>>>>>> 8ecea80a2b77ba47224c781d1f23260ea6736a04
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
