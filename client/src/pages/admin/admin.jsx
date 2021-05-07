import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import memoryUtils from "../../utils/memoryUtils";
// 后台管理的路由组件
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const user = memoryUtils.user;
    console.log(user);
    // if (!user || !user.username) {
    //   return <Redirect to="/login" />;
    // }
    return <div>Hello {user.username}</div>;
  }
}
export default Admin;
