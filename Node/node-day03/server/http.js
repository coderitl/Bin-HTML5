const http = require("http");
const server = http.createServer();
const fs = require("fs");
server.on("request", (req, res) => {
  // 书写响应头
  // 配置响应编码  res.setHeader("Content-Type", "text/plain;charset=utf-8"); 两种方式
  res.writeHeader(200, {
    "content-type": "text/plain;charset=utf8",
  });

  res.end("得到响应: " + req.url);
  console.log("得到响应:" + req.url);
  console.log(req.method);

  // 读取静态资源: 文件读取
  fs.readFile("form.html", (error, data) => {
    if (error) {
      console.log("读取失败");
    } else {
      console.log(data.toString());
    }
  });
});
server.listen(3031, (error) => {
  console.log("可以通过 127.0.0.1:3031/ 来进行访问了");
});
