// http请求与响应.js
const http = require("http");
const server = http.createServer();
// 处理 url
const url = require("url");
// req: request res: response
server.on("request", (req, res) => {
  res.writeHeader(200, {
    "content-type": "text/plain;charset=utf8",
    hello: "world",
  });

  // 请求参数处理 http://127.0.0.1:3031/?username=zhangsan&age=18
  console.log(req.url); // /?username=zhangsan&age=18
  // 字符串截取可以获取参数
  // 内置模块
  console.log(url.parse(req.url));
  /*
    1. 要解析的 url 地址
    2. 将查询的参数解析成对象形式

    url.parse(req.url,true)
  */
  let params = url.parse(req.url, true).query;
  console.log("params: ", params);

  console.log("params-username:", params.username, "params-age:", params.age); // zhangsan 18
  res.end("请求成功");
});
server.listen(3032, (error) => {
  console.log("可以通过 127.0.0.1:3031/ 来访问服务器了····");
});
