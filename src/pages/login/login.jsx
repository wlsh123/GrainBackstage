import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./login.less";
// 登录的路由组件
const NormalLoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className="login">
      <header className="login-header">
        <img src="https://static.ygyg.cn/static/brand/sso-web/yunadmin/logo.png" />
        <h1>谷粒-后台管理系统</h1>
      </header>
      <section className="login-content">
        <h2>用户登录</h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                whitespace:true,
                message: '用户名不能为空！',
              },
            ]}
            initialValue=''
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              style={{ color: 'rgba(0, 0, 0, .25)' }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            initialValue=''
            rules={[
              {
                required: true,
                whitespace:true,
                message: '密码不能为空！',
              },
              {
                min: 4,
                message: '密码不能低于4位！',
              },
              {
                max: 12,
                message: '密码不能超过12位！',
              },
              {
                pattern: /^[a-zA-Z0-9_]+$/,
                message: '密码只能由字母、数字或下划线组成！',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              style={{ color: 'rgba(0, 0, 0, .25)' }}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
        </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
              </Button>
              Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
}
export default NormalLoginForm;
