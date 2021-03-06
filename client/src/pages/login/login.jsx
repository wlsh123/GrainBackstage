import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { reqLogin } from "../../api/index";
import logo from '../../assets/images/logo.png';
// import memoryUtils from "../../utils/memoryUtils";
import storageUtils from '../../utils/storageUtils';
import LinkButton from '../../components/link-button';
import "./login.less";
// 登录的路由组件
const NormalLoginForm = () => {
  const onFinish = (values) => {
    const { username, password } = values;
    reqLogin(username, password).then((response) => {
      console.log(response.data);
      if (response.data.status === 0) {
        //登录成功 {status:0,data:''}
        message.success("登录成功");
        // memoryUtils.user = response.data; //保存到内存中（弃用）
        storageUtils.saveUser(response.data);//保存到localStorage中
        window.location.href = "/";
      } else {
        //登录失败 {status:1,msg:''}
        message.error(response.data.msg);
      }
    })
  };
  return (
    <div className="login">
      <header className="login-header">
        <img src={logo} alt="logo" />
        <h1>谷粒-后台管理系统</h1>
      </header>
      <section className="login-content">
        <h2>用户登录</h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                whitespace: true,
                message: "用户名不能为空！",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              style={{ color: "rgba(0, 0, 0, .25)" }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                whitespace: true,
                message: "密码不能为空！",
              },
              {
                min: 4,
                message: "密码不能低于4位！",
              },
              {
                max: 12,
                message: "密码不能超过12位！",
              },
              {
                pattern: /^[a-zA-Z0-9_]+$/,
                message: "密码只能由字母、数字或下划线组成！",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              style={{ color: "rgba(0, 0, 0, .25)" }}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <LinkButton className="login-form-forgot">
              Forgot password
            </LinkButton>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
            Or <LinkButton href="">register now!</LinkButton>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};
export default NormalLoginForm;
