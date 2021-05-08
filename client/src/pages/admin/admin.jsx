import React, { Component } from "react";
import { Layout } from 'antd';

import { Redirect } from "react-router-dom";
import memoryUtils from "../../utils/memoryUtils";
import LeftNav from '../../components/left-nav';
import MyHeader from "../../components/header";
// 后台管理的路由组件
class Admin extends Component {
  render() {
    const { Header, Footer, Sider, Content } = Layout;
    const user = memoryUtils.user;
    //console.log(user);
    //如果内存没有存储user
    if (!user || !user.data.username) {
      return <Redirect to="/login" />;
    }
    return (
      <Layout style={{ height: '100%' }}>
        <Sider>
          <LeftNav />
        </Sider>
        <Layout>
          <Header><MyHeader /></Header>
          <Content>Content</Content>
          <Footer style={{ textAlign: "center", backgroundColor: "#ccc" }}>备案号：冀ICP备18011182号 - 8 |©新奥阳光易采科技有限公司</Footer>
        </Layout>
      </Layout>
    )
  }
}
export default Admin;
