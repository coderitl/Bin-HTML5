// 引入 express 框架
const express = require("express");

// 创建服务
const app = express();
/*******************************/
// 路由
// 创建路由对象
const index = express.Router();
// 为路由对象匹配请求路径
app.use("/index", index);
// 创建二级路由
index.get("/home", (req, res) => {
  res.send("Blog home Index");
});
/*******************************/

app.listen(3031, () => {
  console.log("服务启动成功···");
});
