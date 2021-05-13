import React, { Component } from "react";
import { Card, Form, Input, Button, Cascader } from "antd";
import { ArrowLeftOutlined } from '@ant-design/icons';
import LinkButton from '../../../components/link-button'
const { TextArea } = Input
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
class ProductEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submit = ()=>{

  }
  render() {
    const title = (
      <span >
        <LinkButton>
          <ArrowLeftOutlined style={{ marginRight: 15, fontSize: 20 }} onClick={()=>this.props.history.goBack()}/>
        </LinkButton>
        <span>添加商品</span>
      </span>
    )
    const layout = {
      labelCol: {//指定左侧label的宽度
        span: 1.5,
      },
      wrapperCol: {//指定右侧包裹的宽度
        span: 5,
      },
    };
    const tailLayout= {
      wrapperCol: {
        offset: 3,
        span: 16,
      }
    };
    return (
      <Card title={title}>
        <Form {...layout}>
          <Form.Item
            label="商品名称"
            name="productName"
            rules={[{ required: true, message: '名称必填' }]}  
          >
            <Input placeholder="请填写商品名称" />
          </Form.Item>
          <Form.Item
            label="商品描述"
            name="productDesc"
            rules={[{ required: true, message: '商品描述必填' }]}  
          >
            <TextArea showCount maxLength={500} />
          </Form.Item>
          <Form.Item
            label="商品价格"
            name="productPrice"
            rules={[{ required: true, message: '商品价格必填' }]}  
          >
            <Input addonAfter="元" type="number" placeholder="请填写商品价格"/>
          </Form.Item>
          <Form.Item
            label="商品分类"
            name="productCategory"
            rules={[{ required: true, message: '商品分类必填' }]}  
          >
            <Cascader options={options} placeholder="Please select" />
          </Form.Item>
          <Form.Item
            label="商品图片"
            name="productPicture"
            rules={[{ required: true, message: '商品图片必填' }]}  
          >
          </Form.Item>
          <Form.Item
            label="商品详情"
            name="productDetail"
            rules={[{ required: true, message: '商品详情必填' }]}  
          >
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" onClick={this.submit}>提交</Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

export default ProductEdit;