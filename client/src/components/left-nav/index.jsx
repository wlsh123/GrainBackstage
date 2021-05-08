import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import logo from "../../assets/images/logo.png";
import "./style.less";
class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { SubMenu } = Menu;
    return (
      <div className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={logo} alt="logo" />
        </Link>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            首页
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
            <Menu.Item key="5">品类管理</Menu.Item>
            <Menu.Item key="6">商品管理</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default LeftNav;
