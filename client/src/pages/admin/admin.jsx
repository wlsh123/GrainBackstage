import React, { Component } from "react";
import { Layout } from 'antd';

import { Redirect, Switch, Route} from "react-router-dom";
import memoryUtils from "../../utils/memoryUtils";
import LeftNav from '../../components/left-nav';
import Header from "../../components/header";
import Home from '../home/Home';
import Product from '../product/Product';
import Category from '../product/Category';
import User from '../user/User';
import Role from '../role/Role';
import Bar from '../charts/Bar';
import Line from '../charts/Line';
import Pie from '../charts/Pie';
// 后台管理的路由组件
class Admin extends Component {
  render() {
    const { Footer, Sider, Content } = Layout;
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
          <Header></Header>
          <Content style={{margin:"20px", backgroundColor:"#fff"}}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/product" component={Product} />
              <Route path="/category" component={Category} />
              <Route path="/role" component={Role} />
              <Route path="/user" component={User} />
              <Route path="/bar" component={Bar} />
              <Route path="/line" component={Line} />
              <Route path="/pie" component={Pie} />
              <Redirect to="/home"/>
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center", backgroundColor: "#ccc" }}>备案号：冀ICP备18011182号 - 9 |©新奥阳光易采科技有限公司</Footer>
        </Layout>
      </Layout>
    )
  }
}
export default Admin;
