const express = require("express");
const router = express.Router();

const path = require("path");
const pathname = path.join(__dirname);
const fs = require("fs");

var Student = require("../student");

// 渲染首页
router.get("/", (req, res) => {
  // 使用封装函数 find()
  Student.find((err, students) => {
    if (err) {
      return res.status(500).send("文件读取失败");
    } else {
      res.render("index.html", {
        students: students,
      });
    }
  });
});

// 添加按钮点击跳转: get: 127.0.0.1:3031/students/new 渲染添加学生页
router.get("/new", (req, res) => {
  res.render("new.html");
});

// 处理添加学生请求 post: 127.0.0.1:3031/students/new
router.post("/new", (req, res) => {
  // 1. 获取表单数据 post: body-parser
  let formdata = req.body;
  // 2, 处理  将数据保存到 db.json 文件中
  // 预处理: 由于文件都是字符串非对象 所以只能先行读取 在追加 追加结束后再对文件进行写入操作
  // 具体操作: 1. 先读取出来 转成对象 2. 然后往对象中 push 数据 3. 然后把对象转换为 字符串 然后把字符串再次写入文件
  // 3. 发送响应 res.body
  Student.save(formdata, (err) => {
    if (err) {
      return res.status(500).send("{'error': 'not found'}");
    } else {
      res.redirect("/students");
    }
  });
});

// 渲染编辑页面
router.get("/edit", (req, res) => {
  // 在客户端的列表页中处理链接问题(需要 id 参数)
  // 获取要编辑的学生的 id
  // 渲染编辑页面
  let id = parseInt(req.query.id);
  Student.findById(id, (err, student) => {
    if (err) {
      return res.status(500).send("Server error");
    } else {
      res.render('edit.html', {
        student: student
      });
    }
  });
});

// 处理编辑请求
router.post("/edit", (req, res) => {
  // 获取表单数据
  console.log(req.body);
  // 更新
  // 发送响应
  Student.updateById(req.body, (err) => {
    if (err) {
      return res.status(500).send("Server error");
    } else {
      res.redirect('/students');
    }
  });
});

// 处理删除请求
router.get("/delete", (req, res) => {
  // 1. 获取要删除的 id
  // 2. 根据 id 执行删除操作
  // 3. 根据操作结果发送响应数据
  Student.deleteById(req.query.id, (err) => {
    if (err) {
      return res.status(500).send("Server error");
    } else {
      res.redirect('/students');
    }
  });
});

module.exports = router;