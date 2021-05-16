const express = require("express");
const router = express.Router();
const data = require("./data/login");
const category = require("./data/category");
const product = require("./data/product");
const categoryInfo = require("./data/category/categoryInfo");
const roleInfo = require("./data/role/index");
const { json } = require("body-parser");
//登录
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
//获取类目列表
router.get(categoryBase + "/list", (req, res) => {
  if (category) {
    // let data = category.data;
    res.send(category);
  } else {
    res.send("接口请求出错");
  }
});
//更新类目
router.post(categoryBase + "/update", (req, res) => {
  const { categoryId, categoryName } = req.body;
  const data1 = category.data1;
  const data2 = category.data2;
  data1.forEach((item) => {
    if (item._id === categoryId) {
      item.name = categoryName;
    }
  });
  data2.forEach((item) => {
    if (item._id === categoryId) {
      item.name = categoryName;
    }
  });
  res.send(category);
});
//添加类目
router.post(categoryBase + "/add", (req, res) => {
  const { categoryName, parentId } = req.body;
  if (parentId === "0") {
    //添加一级类目
    const data1 = category.data1;
    const newCategory = {
      parentId: parentId,
      _id: (Math.random() * 10).toString(),
      name: categoryName,
      _v: 0,
    };
    data1.unshift(newCategory);
    res.send(category);
  } else {
    //添加二级类目
    const data2 = category.data2;
    const newCategory = {
      parentId: parentId,
      _id: (Math.random() * 100).toString(),
      name: categoryName,
      _v: 0,
    };
    data2.unshift(newCategory);
    res.send(category);
  }
});

const productBase = "/manage/product";
//获取商品列表
router.get(productBase + "/list", (req, res) => {
  if (product) {
    // let data = category.data;
    res.send(product.data);
  } else {
    res.send("接口请求出错");
  }
});
//搜索商品
router.get(productBase + "/search", (req, res) => {
  if (product) {
    // let data = category.data;
    res.send(product.data);
  } else {
    res.send("接口请求出错");
  }
});
//类目详情
router.get(categoryBase+"/info",(req,res) =>{
  const {categoryId} = req.query;
  const result = categoryInfo.filter(category => category._id == categoryId);
  res.send(result[0]);
})
//更新商品信息
router.post(productBase+"/updateStatus", (req, res) =>{
  const {productId,status} = req.body
  const {list} = product.data;
  list.forEach(element=>{
    if (element._id === productId) {
      element.status = status
    }
  })
  res.send(product);
})
const roleBase = "/manage/role"
//获取角色列表
router.get(roleBase + "/list", (req, res) => {
  res.send(roleInfo);
})
//添加角色
router.post(roleBase + "/add", (req,res) => {
  const {roleName} = req.body;
  const newRole = {
    "menus":'',
    "_id": (roleInfo.data.length+1).toString(),
    "name": roleName,
    "create_time": Date.now(),
    "_v": 0,
    "auth_time": "",
    "auth_name": ""
  }
  roleInfo.data.unshift(newRole)
  res.send(roleInfo);
})
module.exports = router;
