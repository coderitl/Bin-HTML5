const express = require("express");
const router = express.Router();

let comments = [];


router.get("/index", (req, res) => {
  res.render("index.html");
});

router.post("/pinglun", (req, res) => {
  // 通过 req.body 获取post 表单请求数据
  let comment = req.body;
  comments.unshift(comment);
  res.render("pinglun.html", { comments: comments });
});
module.exports = router;
