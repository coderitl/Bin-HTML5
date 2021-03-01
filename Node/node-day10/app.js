const fs = require("fs");
const url = require("url");
const template = require("art-template");
// 创建 express 服务器
const express = require("express");
const app = express();

// 开放静态资源路径 访问方式: 127.0.0.1:3031/public/file-name
// app.use("/public", express.static("./public/"));

// 当省略第一个参数的时候 可以省略 /public 的方式访问
app.use(express.static("./public/")); // 127.0.0.1:3031/file-name

// index router
app.get("/index", (req, res) => {
  // 读取文件
  fs.readFile("public/index.html", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let resoult = template.render(data.toString());
      res.send(resoult);
    }
  });
});

/* ************************************* */
let comments = [];
/* ************************************* */

app.get("/pinglun", (req, res) => {
  // 读取 pinglun.html
  fs.readFile("public/pinglun.html", (err, data) => {
    if (err) {
      console.log("文件读取失败");
    } else {
      // 解析 get 参数数据
      let parserObj = url.parse(req.url, true);
      let pathname = parserObj.pathname; //  /pinglun
      console.log(pathname);
      let comment = parserObj.query; // ? 后面的数据 { username: 'asd', message: 'dsadad' }
      // 追加到数组中 服务器端这个时候已经把数据存储好了 接下来就是让用户重新请求 / 首页
      comments.unshift(comment);

      // 重定向问题
      // 如何通过服务器让客户端重定向
      // 1. 状态码设置为 302 临时重定向
      // statusCode
      // 2. 在响应头中通过 Location 告诉客户端往哪儿重定向
      // setHeader
      // res.statusCode = 302;
      // res.setHeader("Location", "/");
      // res.send();
      // 模板字符串
      let templateP = template.render(data.toString(), {
        comments: comments,
      });
      res.send(templateP);
    }
  });
});

// 监听端口号
app.listen(3031, () => {
  console.log("服务器启动成功··········");
});
