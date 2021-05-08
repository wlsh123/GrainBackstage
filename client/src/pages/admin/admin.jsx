import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import memoryUtils from "../../utils/memoryUtils";
// 后台管理的路由组件
class Admin extends Component {
  render() {
    const user = memoryUtils.user;
    //console.log(user);
    //如果内存没有存储user
    if (!user || !user.data.username) {
      return <Redirect to="/login" />;
    }
    return <div>Hello {user.data.username}</div>;
  }
}
export default Admin;
