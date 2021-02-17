// 引入 express 框架
const express = require("express");
// 创建服务
const app = express();

// 导入路由
const home = require("./home");
const admin = require("./admin");
// 选择对应的匹配路由
app.use("/home", home);
app.use("/admin", admin);

app.listen(3031, () => {
  console.log("服务启动成功···");
});
