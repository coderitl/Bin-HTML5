// 引入 express 框架
const express = require("express");
const { is } = require("type-is");
// 创建服务
const app = express();

// 中间件
app.use("/admin", (req, res, next) => {
  // 用户没有登录
  let isLogin = true;
  if (isLogin) {
    // true 就是登录 如果登录继续向下执行
    next();
  } else {
    // 如果用户没有登陆.直接对客户端做出响应
    res.send("请登录·········");
  }

  app.get("/admin", (req, res) => {
    res.end("你已登陆·····");
  });
});

app.use((req, res, next) => {
  res.status(404).send("当前访问页面不存在");
});

app.get("/list", (req, res) => {
  // 抛出异常
  throw new Error("程序发生了未知错误");
  res.end("程序正常执行");
});
// 错误处理中间件
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

// 路由

app.listen(3031, () => {
  console.log("服务启动成功···");
});
