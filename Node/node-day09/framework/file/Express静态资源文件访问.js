// 引入 express 框架
const express = require("express");
const path = require("path");
// 创建服务
const app = express();


const pathname = path.join(__dirname, "public");
// 实现静态资源访问功能
app.use(express.static(pathname));

app.listen(3031, () => {
  console.log("服务启动成功···");
});
