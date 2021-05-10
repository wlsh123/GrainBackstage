# 客户端

1. 前端如何解决代理问题：

axios 解决跨域的方法：使用 http-proxy-middleware 中间件
create-react-app 解决跨域的方法可以在 package.json 文件中配置："proxy":"http://localhost:5000"

jsonp 解决 ajax 跨域的原理
1.jsonp 只能解决 GET 类型的 ajax 请求跨域问题
2.jsonp 请求不是 ajax 请求，而是一般的 get 请求 3.基本原理  
 浏览器端：动态生成<script>来请求后台接口（src 就是接口的 url），定义好用于接收响应数据的函数（fn），并将函数名通过请求参数提交给后台（如：callback=fn）
服务器端：接收到请求处理产生结果数据后，返回一个函数调用的 js 代码，并将结果数据作为实参传入函数调用。
浏览器端：收到响应自动执行函数调用的 js 代码，也就执行了提前定义好的回调函数，并得到了需要的结果数据。
