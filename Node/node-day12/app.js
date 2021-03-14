const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// 配置 post 获取请求体中间件 配置模板引擎和body-parser 一定要在挂在路由之前
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 模板引擎配置 可更改模板文件后缀
app.engine("html", require("express-art-template"));

// 开启静态资源
app.use("/node_modules/", express.static("./node_modules/"));
app.use("/public/", express.static("./public/"));

// 导入路由
let studentsRouter = require("./router/studentsRouter");
app.use("/students", studentsRouter);

app.listen(3031, () => {
  console.log("server running port 3031");
});
