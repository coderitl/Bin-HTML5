// 引入 express 框架
const express = require("express");
// 创建服务
const app = express();

// 配置解析 post 表单的中间件
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));

// 路由
let userRouter = require("./router/userRouter");
app.use("/user", userRouter); // 127.0.0.1:3031/user/login  通过 user 再进入 userRouter 下寻找对应路由

// 开放静态资源 添加public 的化显示更加直观
app.use("/public/", express.static("./public/"));
// 省略 public 则对 url 显示更加简介

// 使用 express-art-template 模板引擎 app.engine('以什么后缀的文件',)
app.engine("html", require("express-art-template"));

// 监听端口号
app.listen(3031, () => {
  console.log("Express 服务器启动成功");
});
