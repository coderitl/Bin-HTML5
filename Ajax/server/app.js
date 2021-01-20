// 引入 express 框架
const express = require("express");
// 路径处理模块
const path = require("path");
// post 所需要
const bodyParser = require("body-parser");

// 系统模块
const fs = require("fs");

// 创建WEB 服务器
const app = express();
// bodyParser.urlencoded --> 解析格式: application/x-www-form-urlencoded
app.use(bodyParser.json()); // 解析 JSON 格式

// 静态资源访问服务器功能
app.use(express.static(path.join(__dirname, "public")));

// 创建路由
app.get("/first", (req, res) => {
  res.send("入门了···");
});

// JSON 数据
app.get("/responseData", (req, res) => {
  res.send({ name: "zs" });
});
// 参数传递
app.get("/get", (req, res) => {
  res.send(req.query);
});

//  post 请求参数
app.post("/post", (req, res) => {
  res.send(req.body);
});

// json 格式参数
app.post("/json", (req, res) => {
  res.send(req.body);
});

// 错误处理
app.get("/error", (req, res) => {
  res.status(400).send("not ok");
});

// IE 缓存
app.get("/cache", (req, res) => {
  fs.readFile("./hello.txt", (err, result) => {
    res.send(result);
  });
});

// 邮箱验证案例

// 邮箱地址验证
app.get("/verifyEmailAdress", (req, res) => {
  // 接收客户端传递过来的邮箱地址
  const email = req.query.email;
  // 判断邮箱地址注册过的情况
  if (email == "3327511395@qq.com") {
    // 设置http状态码并对客户端做出响应
    res
      .status(400)
      .send({ message: "邮箱地址已经注册过了, 请更换其他邮箱地址" });
  } else {
    // 邮箱地址可用的情况
    // 对客户端做出响应
    res.send({ message: "恭喜, 邮箱地址可用" });
  }
});

// 监听端口
app.listen(3000);
// 控制台显示输出
console.log("服务器启动成功···");
