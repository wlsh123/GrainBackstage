const express = require("express");
const router = express.Router();
const data = require("./data/login");

router.post("/login", (req, res) => {
  // console.log(req.body);
  let { username, password } = req.body;
  if (username && password) {
    let response = {
      status: 0,
      data: {
        username: username,
        password: password,
      },
    };
    res.send(response);
  } else {
    res.send({
      status: 1,
      msg: "用户名或密码错误",
    });
  }
});

router.post("/register", (req, res) => {
  console.log(req.body);
  let { name, age } = req.body;
  if (name === "zs" && age === "12") {
    res.send("注册成功");
  } else {
    res.send("注册失败");
  }
});
module.exports = router;
