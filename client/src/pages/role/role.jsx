import { Card, Button, Table, Modal, message } from 'antd';
import React, { Component } from 'react';
import { reqAddRoles, reqRoles } from '../../api';
import AddForm from '../../components/role/AddForm';
import AuthForm from '../../components/role/AuthForm';
import {PAGE_SIZE} from '../../utils/constants';
import { formateDate } from '../../utils/dateUtils';
class Role extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      roles:[],//所有角色的列表
      role:{},//当前选中对象
      isShowAdd:false,//是否显示添加角色
      isShowAuth:false,//是否显示设置角色权限
     }
  }
  initColumn = ()=>{
    this.columns=[
      {
        title:'角色名称',
        dataIndex:"name",
        key:"name"
      },
      {
        title: '创建时间',
        dataIndex: 'create_time',
        key:"create_time",
        render: (create_time) => formateDate(create_time)
      },
      {
        title: '授权时间',
        dataIndex: 'auth_time',
        key:'auth_time',
        render: (auth_time) => formateDate(auth_time)
      },
      {
        title: '授权人',
        dataIndex: 'auth_name',
        key: 'auth_name'
      }
    ]
  }
  onRow = (role)=>{
    return {
      onClick:event=>{//点击行
        this.setState({role})
      }
    }
  }
  getRoles = async ()=>{
    const result = await reqRoles()
    if (result.status === 200) {
      const roles = result.data.data;
      this.setState({roles})
    }
  }
  //添加角色
  addRole = async ()=>{
    // console.log(this.form.getFieldsValue(["role"]))
    const {role} = this.form.getFieldsValue(["role"]);
    this.setState({isShowAdd:false})
    //请求接口
      const result = await reqAddRoles(role);
      if (result.status === 200) {
        message.success('添加角色成功');
        const roles = result.data.data;
        this.setState({ roles })
      }else{
        message.error('添加角色失败!')
      }
    this.form.resetFields();
  }
  //更新角色
  updateRole = () =>{
    message.success('角色权限设置成功')
    this.setState({ isShowAuth: false });
  }
  UNSAFE_componentWillMount(){
    this.initColumn();
  }
  componentDidMount(){
    this.getRoles();
  }
  render() {
    const { roles, role, isShowAdd, isShowAuth } = this.state
    const title = (
      <span>
        <Button type="primary" style={{marginRight:'15px'}} onClick={()=>this.setState({isShowAdd:true})}>创建角色</Button>
        <Button type="primary" disabled={!role._id} onClick={() => this.setState({ isShowAuth: true })}>设置权限</Button>
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
            total:roles.length,
            defaultPageSize: PAGE_SIZE,
            showQuickJumper: true,
            // onChange: this.getProducts
          }}
          rowSelection={{type:"radio", selectedRowKeys:[role._id]}}
          onRow={this.onRow}
        />
        <Modal
         title="创建角色"
         visible={isShowAdd}
         onOk={this.updateRole}
          onCancel={() => {
            this.setState({ isShowAdd: false }); 
            this.form.resetFields();}}
        >
          <AddForm formValue={(e) => { this.form = e }}/>
        </Modal>

        <Modal
          title="设置角色权限"
          visible={isShowAuth}
          onOk={this.updateRole}
          onCancel={() => {
            this.setState({ isShowAuth: false });
          }}
        >
          <AuthForm formValue={(e) => { this.form = e }} role={role}/>
        </Modal>
      </Card>
     );
  }
}
 
export default Role;