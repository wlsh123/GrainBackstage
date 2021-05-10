# 这是用node+express搭建的后台

1. express发送post请求，需要安装中间件，body-parser

2. express解决跨域问题：

   ```javascript
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
   ```

   