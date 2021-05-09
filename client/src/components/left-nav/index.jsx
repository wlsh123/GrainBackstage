import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
import logo from "../../assets/images/logo.png";
import menuList from '../../config/menuConfig.js';
import "./style.less";
class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }    

  getMenuNodes = (menuList)=>{
    const { SubMenu } = Menu;
    const path = this.props.location.pathname;
    return menuList.map(item =>{
      if (!item.children){
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.key} >
              {item.title}
            </Link>
          </Menu.Item>
        )
      }else{
        const cItem = item.children.find(cItem => cItem.key === path)
        if (cItem) {
          this.openKey = item.key
        }
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {this.getMenuNodes(item.children)}
          </SubMenu>
        )
      }
    })
  }
  UNSAFE_componentWillMount(){
    this.menuNodes = this.getMenuNodes(menuList)
  }
  render() {
    const path = this.props.location.pathname;
    // console.log(path)
    const openKey = this.openKey
    return (
      <div className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={logo} alt="logo" />
        </Link>
        <Menu
          defaultSelectedKeys={["path"]}
          defaultOpenKeys={[openKey]}
          selectedKeys={[path]}
          mode="inline"
          theme="dark"
        >
          {this.menuNodes}
        </Menu>
      </div>
    );
  }
}
/*
withRouter高阶组件：
包装非路由组件，返回一个新的组件
新组件向非路由组件传递3个属性：history/location/match
*/
export default withRouter(LeftNav);
