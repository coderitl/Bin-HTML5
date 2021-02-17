const express = require("express");
// 创建路由对象
const admin = express.Router();

// 匹配
admin.get("/index", (req, res) => {
  res.end("admin pages");
});

// 导出
module.exports = admin;
