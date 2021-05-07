module.exports = {
  loginSuccess: {
    status: 0,
    data: {
      username:username,
      password:password
    }
  },
  loginError: {
      status: 1,
      msg: "用户名或密码错误"
    }
}
