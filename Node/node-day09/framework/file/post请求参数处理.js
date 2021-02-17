// 引入 express 框架
const express = require("express");
const bodyParser = require("body-parser");
// 创建服务
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/index", (req, res) => {
  res.send(req.url);
  console.log(req.body); // [Object: null prototype] { username: 'qw', pwd: 'sa' }
});

app.listen(3031, () => {
  console.log("服务启动成功···");
});
