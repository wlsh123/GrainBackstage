const express = require('express')
const router = express.Router();
const data = require('./data/login')

router.post('/login', (req, res) => {
  console.log(req.body)
  let {username, password} = req.body
  if (username && password) {
    res.send(data.loginSuccess)
  } else {
    res.send(data.loginError)
  }
})


router.post('/register', (req, res) => {
  console.log(req.body)    
  let { name, age } = req.body
  if (name === 'zs' && age === "12") {
    res.send('注册成功')
  } else {
    res.send('注册失败');
  }
})
module.exports = router;