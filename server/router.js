const express = require("express");
const router = express.Router();
const data = require("./data/login");
const category = require("./data/category");
const { json } = require("body-parser");
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
const categoryBase = "/manage/category";
router.get(categoryBase + "/list", (req, res) => {
  if (category) {
    // let data = category.data;
    res.send(category);
  } else {
    res.send("接口请求出错");
  }
});
router.post(categoryBase +"/update",(req,res)=>{
  const { categoryId, categoryName } = req.body
  const data1 = category.data1;
  const data2 = category.data2;
  data1.forEach(item=>{
    if (item._id === categoryId){
      item.name = categoryName
    }
  })
  data2.forEach(item => {
    if (item._id === categoryId) {
      item.name = categoryName
    }
  })
  res.send(category)
})
router.post(categoryBase+"/add",(req,res)=>{
  const { categoryName, parentId} = req.body
  if (parentId === '0') {
    //添加一级类目
    const data1 = category.data1;
    const newCategory = {
      "parentId": parentId,
      "_id": (Math.random()*10).toString(),
      name: categoryName,
      _v: 0,
    }
    data1.unshift(newCategory)
    res.send(category)
  }else{
    //添加二级类目
    const data2 = category.data2;
    const newCategory = {
      "parentId": parentId,
      "_id": (Math.random() * 100).toString(),
      name: categoryName,
      _v: 0,
    }
    data2.unshift(newCategory)
    res.send(category)
  }
})
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
