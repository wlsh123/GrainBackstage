import React, { Component } from "react";
import {
  Card,
  Button,
  Table,
  message,
  Select,
  Input,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import LinkButton from "../../../components/link-button";
import { reqProduct, reqSearchProduct, reqUpdateStatus } from "../../../api";
import {PAGE_SIZE} from "../../../utils/constants";
class ProductHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total:0,//商品总数量
      products: [], //商品数组
      loading:false,
      searchName:'',//搜索关键字
      searchType:'productName'//搜索类型
    };
  }
  //初始化table的列数据
  initColumns = () => {
    this.columns = [
      {
        width:"20%",
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
        width:"10px",
        title: "价格",
        dataIndex: "price",
        key: "address",
        render: (price) => "￥" + price,
      },
      {
        width: "80px",
        title: "状态",
        //dataIndex: "status",
        key: "status",
        render: (product) => {
          const {status, _id} = product
          return (
            <span>
              <span style={{margin: "0 10px"}}>{status === 1 ? "在售" : "停售"}</span>
              <Button 
                type="primary" 
                onClick={()=>this.updateStatus(_id, status === 1 ? 2:1)}
                >
                {status === 1 ? "下架":"上架"}
              </Button>
            </span>
          );
        },
      },
      {
        width: "80px",
        title: "操作",
        key: "oper",
        render: (product) => {
          return (
            <span>
              {/* 将product对象使用state传递给目标路由组件 */}
              <LinkButton onClick={()=>this.props.history.push('/product/detail', product)}>详情</LinkButton>
              <LinkButton onClick={() => this.props.history.push('/product/edit', product)}>修改</LinkButton>
            </span>
          );
        },
      },
    ];
  };
  //更新指定商品的状态
  updateStatus = async (productId, status)=>{
    const result = await reqUpdateStatus(productId, status)
    if (result.status === 200) {
      message.success('更新商品成功');
      this.getProducts(this.pageNum);
    }
  }
  //获取指定页码的列表数据显示
  getProducts = async (pageNum) => {
    this.pageNum = pageNum;
    const {searchName, searchType} = this.state
    this.setState({ loading: true });
    let result;
    if (searchName) {//带关键字搜索
      result = await reqSearchProduct({pageNum, pageSize:PAGE_SIZE, searchName, searchType})
    } else {//一般分页
      result = await reqProduct(pageNum, PAGE_SIZE);
    }
    this.setState({ loading: false });
    if (result.status === 200) {
      //取出分页数据，更新状态，显示分页列表
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
    const { products, total, loading, searchName, searchType } = this.state;
    const title = (
      <span>
        <Select 
          value={searchType} 
          style={{ width: 120 }} 
          onChange={value => this.setState({searchType:value})}
          >
          <Option value="productName">按名称搜索</Option>
          <Option value="productDesc">按描述搜索</Option>
        </Select>
        <Input
          placeholder="关键字"
          value={searchName}
          onChange={e => this.setState({searchName:e.target.value})}
          style={{ width: 150, margin: "0 10px" }}
        ></Input>
        <Button type="primary" onClick={()=>this.getProducts(1)}>搜索</Button>
      </span>
    );
    const extra = (
      <Button type="primary" onClick={() => this.props.history.push('/product/edit')}>
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
         loading={loading}
         rowKey="_id"
         pagination={{
           total, 
           defaultPageSize:PAGE_SIZE, 
           showQuickJumper:true, 
           onChange:this.getProducts
          }}
         />
      </Card>
    );
  }
}
export default ProductHome;