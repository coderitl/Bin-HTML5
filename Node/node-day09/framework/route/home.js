const express = require("express");
// 创建路由对象
const home = express.Router();

// 匹配
home.get("/index", (req, res) => {
  res.end("home pages");
});

// 导出
module.exports = home;
