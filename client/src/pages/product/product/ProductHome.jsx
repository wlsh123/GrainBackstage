import React, { Component } from "react";
import {
  Card,
  Button,
  Table,
  message,
  Modal,
  Select,
  Input,
} from "antd";
import { PlusOutlined, RightOutlined } from "@ant-design/icons";
import LinkButton from "../../../components/link-button";
import { reqProduct } from "../../../api";
import {PAGE_SIZE} from "../../../utils/constants";
class ProductHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total:0,//商品总数量
      products: [] //商品数组
    };
  }
  //初始化table的列数据
  initColumns = () => {
    this.columns = [
      {
        width:"15%",
        title: "商品名称",
        dataIndex: "name",
        key: "name",
      },
      {
        width:"40%",
        title: "商品描述",
        dataIndex: "desc",
        key: "age",
      },
      {
        width:"",
        title: "价格",
        dataIndex: "price",
        key: "address",
        render: (price) => "￥" + price,
      },
      {
        width: "80px",
        title: "状态",
        dataIndex: "status",
        key: "status",
        render: (status) => {
          return (
            <span>
              <Button type="primary">下架</Button>
              <span>在售</span>
            </span>
          );
        },
      },
      {
        width: "80px",
        title: "操作",
        dataIndex: "status",
        key: "status",
        render: (product) => {
          return (
            <span>
              <LinkButton>详情</LinkButton>
              <LinkButton>修改</LinkButton>
            </span>
          );
        },
      },
    ];
  };
  //获取指定页码的列表数据显示
  getProducts = async (pageNum) => {
    const result = await reqProduct(pageNum, PAGE_SIZE);
    if (result.status === 200) {
      const {total, list} = result.data;
      this.setState({
        total,
        products:list
      })
    }else{
      message.error('reqProduct接口请求失败！')
    }
  };
  UNSAFE_componentWillMount() {
    this.initColumns();
  }
  componentDidMount() {
    this.getProducts(2);
  }
  render() {
    const { Option } = Select;
    const { products, total } = this.state;
    const title = (
      <span>
        <Select defaultValue="search-by-name" style={{ width: 120 }}>
          <Option value="search-by-name">按名称搜索</Option>
          <Option value="search-by-desc">按描述搜索</Option>
        </Select>
        <Input
          placeholder="关键字"
          style={{ width: 150, margin: "0 10PX" }}
        ></Input>
        <Button type="primary">搜索</Button>
      </span>
    );
    const extra = (
      <Button type="primary">
        <PlusOutlined />
        添加商品
      </Button>
    );
    return (
      <Card title={title} extra={extra}>
        <Table 
         dataSource={products} 
         columns={this.columns} 
         bordered 
         pagination={{total, defaultPageSize:PAGE_SIZE, showQuickJumper:true}}
         />
      </Card>
    );
  }
}

export default ProductHome;
