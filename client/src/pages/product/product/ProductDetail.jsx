import React, { Component } from "react";
import { Card, List } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const title = (
      <span>
        <ArrowLeftOutlined />
        <span>商品详情</span>
      </span>
    )
    const data = [
      <span>
        <span className="left">商品名称：</span>
        <span>XXXX商品</span>
      </span>,
      <span>
        <span className="left">商品描述：</span>
        <span>撒打算几点呢</span>
      </span>,
      <span>
        <span className="left">商品价格：</span>
        <span>999999元</span>
      </span>,
      <span>
        <span className="left">所属分类：</span>
        <span>电脑---》笔记本</span>
      </span>, 
      <span>
        <span className="left">商品图片：</span>
        <span><img src="" alt="" /></span>
      </span>,
      <span>
        <span className="left">商品详情：</span>
        <span>撒打算几点呢</span>
      </span>
    ]
    return <div>
      <Card title={title} className="product-detail">
        <List 
          dataSource={data}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </Card>
    </div>;
  }
}

export default ProductDetail;