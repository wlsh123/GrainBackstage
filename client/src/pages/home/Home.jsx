import React, { Component } from 'react';
import './style.less'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="home">欢迎使用谷粒后台管理系统</div>
     );
  }
}
 
export default Home;