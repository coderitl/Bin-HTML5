// post请求参数.js
// http请求与响应.js
const http = require("http");
const server = http.createServer();
// 处理请求参数模块 post 请求转换为 对象数据
const queryString = require("querystring");
// req: request res: response
server.on("request", (req, res) => {
  // 编码处理
  res.writeHeader(200, {
    "content-type": "text/plain;charset=utf8",
  });
  // post 参数是通过事件的方式接受的
  // data 当请求参数传递的时候触发 data 事件
  // end 当参数传递完成的时候触发 end 事件
  // username=aidou&password=123
  let postParams = "";
  req.on("data", (params) => {
    postParams += params;
  });
  req.on("end", () => {
    console.log(postParams);
    let querystr = queryString.parse(postParams);
    console.log(querystr); // { username: 'aidou', password: '123' }
  });
  res.end("ok");
});
server.listen(3031, (error) => {
  console.log("可以通过 127.0.0.1:3031/ 来访问服务器了····");
});
