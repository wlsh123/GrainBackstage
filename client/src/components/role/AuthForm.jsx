import React, { Component } from 'react';
import { Form, Input, Tree } from 'antd';
import PropTypes from 'prop-types';
import menuList from '../../config/menuConfig';
class AuthForm extends Component {
  constructor(props) {
    super(props);
    const { menus} = this.props.role
    this.state = { 
      checkedKeys:menus
     }
  }
  static propTypes = {
    role:PropTypes.object
  }
  getTreeNodes = (menuList)=>{
    return menuList.reduce((pre,item)=>{
      pre.push({
        title:item.title,
        key:item.key,
        children:item.children ? this.getTreeNodes(item.children) : null
      })
      return pre
    },[])
  }
  UNSAFE_componentWillMount(){
    this.treeData = this.getTreeNodes(menuList)
  }
  UNSAFE_componentWillReceiveProps(nextProps){
    const menus = nextProps.role.menus
    this.setState({checkedKeys:menus});
  }
  render() { 
    const {role} = this.props;
    const { checkedKeys} = this.state;
    const treeData = [
      {
        title: '平台权限',
        key: '0-0',
        children: this.treeData
      }
    ];
    const onSelect = (selectedKeys, info) => {
      console.log('selected', selectedKeys, info);
    };

    const onCheck = (checkedKeys, info) => {
      console.log('onCheck', checkedKeys, info);
      this.setState({checkedKeys})
    };
    return ( 
      <Form>
        <Form.Item label="角色名称">
            <Input placeholder="请输入角色名称" value={role.name} disabled></Input>
        </Form.Item>
        <Tree
          checkable
          defaultExpandAll
          checkedKeys={checkedKeys}
          onSelect={onSelect}
          onCheck={onCheck}
          treeData={treeData}
        />
      </Form>
     );
  }
}
 
export default AuthForm;