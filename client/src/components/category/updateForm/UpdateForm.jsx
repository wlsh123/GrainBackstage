import React, { Component } from "react";
import { Form, Input } from "antd";
import { PropTypes } from 'prop-types'
// 修改类目的标签
class UpdateForm extends Component {
  constructor(props){
    super(props);
    this.myForm = React.createRef();
  }
  static propTypes = {
    categoryName:PropTypes.string,
    setForm:PropTypes.func,
  }
  UNSAFE_componentWillMount(){
    
  }
  render() {
    const { categoryName } = this.props;
    console.log(this.myForm.current)
    return (
      <Form ref={this.myForm}>
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
