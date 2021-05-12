import React, { Component } from "react";
import { Form, Select, Input } from "antd";
import { PropTypes} from 'prop-types';
// 添加类目的标签
const { Option } = Select;
class AddForm extends Component {
  static propTypes = {
    categorys: PropTypes.array.isRequired,
    parentId:PropTypes.string.isRequired,
  }
  render() {
    const {categorys, parentId} = this.props;
    return (
      <Form ref={this.props.formValue}>
        <Form.Item label="所属类目">
          <Form.Item
            name={["address", "province"]}
            noStyle
            initialValue={parentId}
            rules={[{ required: true, message: "Province is required" }]}
          >
            <Select
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {
                categorys.map(c => <Option value={c._id} key={Math.random()*100}>{c.name}</Option>)  
              }
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
