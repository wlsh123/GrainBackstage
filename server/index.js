const express = require('express')
const app = express()
const router = require('./router')
const port = 5000
const bodyParser = require('body-parser')
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
});

app.use(express.urlencoded({ extended: false }))
// parse application/json  （json传输）
app.use(express.json())
app.use('/api', router);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/api/login`)
})