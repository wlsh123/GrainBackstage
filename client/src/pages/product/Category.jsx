import React, { Component } from 'react';
import { Card, Button, Table} from 'antd';
import { PlusOutlined} from '@ant-design/icons';
import LinkButton from '../../components/link-button';
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    //Card的左侧
    const title = '一级分类列表'
    //Card的右侧
    const extra = (
      <Button type="primary">
        <PlusOutlined />
        添加
      </Button>
    )
    const dataSource = [
      {
        "parentId": "0",
        "_id": "0",
        "name": '电器',
        "_v": 0
      },
      {
        "parentId": "0",
        "_id": "1",
        "name": '家具',
        "_v": 0
      },
      {
        "parentId": "0",
        "_id": "3",
        "name": '出租车',
        "_v": 0
      },
      {
        "parentId": "0",
        "_id": "4",
        "name": '跑车',
        "_v": 0
      },
      {
        "parentId": "0",
        "_id": "5",
        "name": '电动车',
        "_v": 0
      }
    ];
    const columns = [
      {
        title: '分类名',
        dataIndex: 'name',//显示数据对应的属性名
        key:'name'
      },
      {
        width:"25%",
        title: '操作', 
        key:'operation',
        render: ()=>(//返回需要显示的界面标签
          <span>
            <LinkButton>修改分类</LinkButton>
            <LinkButton>查看子分类</LinkButton>
          </span>
        )
      },
    ];
    return ( 
      <div>
        <Card title={title} extra={extra} style={{ width: "100%" }}>
          <Table 
            dataSource={dataSource} 
            columns={columns} 
            bordered
            rowKey="_id"
            />
        </Card>
      </div>
     );
  }
}
 
export default Category;