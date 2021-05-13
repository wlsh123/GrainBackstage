import React, { Component } from "react";
import { Card, List } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import LinkButton from '../../../components/link-button'
import { reqCategory } from "../../../api";
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName:'',
    };
  }
  async componentDidMount(){
    const {categoryId} = this.props.location.state;
    const result = await reqCategory(categoryId)
    this.setState({categoryName:result.data.name})
  }
  render() {
    // 读取路由跳转携带过来的state属性
    const { name, desc, price, imgs, detail} = this.props.location.state;
    const { categoryName } = this.state;
    const title = (
      <span >
        <LinkButton>
          <ArrowLeftOutlined style={{ marginRight: 15, fontSize: 20 }} onClick={()=>this.props.history.goBack()}/>
        </LinkButton>
        <span>商品详情</span>
      </span>
    )
    const data = [
      <span>
        <span className="left">商品名称：</span>
        <span>{name}</span>
      </span>,
      <span>
        <span className="left">商品描述：</span>
        <span>{desc}</span>
      </span>,
      <span>
        <span className="left">商品价格：</span>
        <span>{price}元</span>
      </span>,
      <span>
        <span className="left">所属分类：</span>
        <span>{categoryName}</span>
      </span>, 
      <span>
        <span className="left">商品图片：</span>
        {
          imgs.map(img=>(
            <img src={img} alt="img" className="product-img" key={Math.random()*10}/>
          ))
        }
        <span></span>
      </span>,
      <span>
        <span className="left">商品详情：</span>
        <span dangerouslySetInnerHTML={{__html:detail}}></span>
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