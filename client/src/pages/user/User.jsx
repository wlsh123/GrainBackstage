import { Card, Button, Table, Modal } from 'antd';
import React, { Component } from 'react';
import { PAGE_SIZE } from '../../utils/constants';
import { formateDate } from '../../utils/dateUtils';
import LinkButton from '../../components/link-button';
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [],//所有角色的列表
      isShowAdd: false,//是否显示添加角色
    }
  }
  initColumn = () => {
    this.columns = [
      {
        title: '用户名',
        dataIndex: "name",
        key: "name"
      },
      {
        title: '邮箱',
        dataIndex: 'create_time',
        key: "create_time",
        render: (create_time) => formateDate(create_time)
      },
      {
        title: '电话',
        dataIndex: 'auth_time',
        key: 'auth_time',
        render: (auth_time) => formateDate(auth_time)
      },
      {
        title: '注册时间',
        dataIndex: 'auth_name',
        key: 'auth_name'
      },
      {
        title: '所属角色',
        dataIndex: 'role',
        key: 'role'
      },
      {
        title: '操作',
        render:(user)=>(
          <span>
            <LinkButton>修改</LinkButton>
            <LinkButton>删除</LinkButton>
          </span>
        )
      }
    ]
  }
  UNSAFE_componentWillMount() {
    this.initColumn();
  }
  componentDidMount() {}
  render() {
    const { roles, isShowAdd } = this.state
    const title = (
      <span>
        <Button type="primary" style={{ marginRight: '15px' }} onClick={() => this.setState({ isShowAdd: true })}>创建用户</Button>
      </span>
    )
    return (
      <Card title={title}>
        <Table
          dataSource={roles}
          columns={this.columns}
          bordered
          // loading={loading}
          rowKey="_id"
          pagination={{
            total: roles.length,
            defaultPageSize: PAGE_SIZE,
            showQuickJumper: true,
            // onChange: this.getProducts
          }}
        />
        <Modal
          title="创建用户"
          visible={isShowAdd}
          onOk={this.updateRole}
          onCancel={() => {
            this.setState({ isShowAdd: false });
          }}
        >
          <div>待开发...</div>
        </Modal>
      </Card>
    );
  }
}
export default User;