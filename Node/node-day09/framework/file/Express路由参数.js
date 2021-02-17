// 引入 express 框架
const express = require("express");
const bodyParser = require("body-parser");
// 创建服务
const app = express();

app.get("/index/:id", (req, res) => {
  console.log(req.params); 
});

app.listen(3031, () => {
  console.log("服务启动成功···");
});
