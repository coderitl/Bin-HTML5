// 引入 express 框架
const express = require("express");
// 创建网站服务器
const app = express();

// TODO: 路由
app.get("/index", (req, res) => {
  res.send("index page");
});


app.listen(3031);
console.log("数据库连接成功");
