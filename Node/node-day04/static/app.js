const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const mime = require("mime");

const server = http.createServer();

server.on("request", (req, res) => {

  // 响应文件路径
  let pathname = url.parse(req.url).pathname;
  pathname = pathname == "/" ? "/default.html" : pathname;
  // 绝对路径获取 url
  let realPath = path.join(__dirname, "public" + pathname);

  // 请求资源类型
  let type = mime.getType(realPath);

  fs.readFile(realPath, (error, data) => {
    if (error != null) {
      res.end("读取失败···");
      return;
    } 
    res.writeHead(200, {
      "content-type": type,
    });
    res.end(data);
    
  });
});

server.listen(3031, (error) => {
  console.log("ok");
});
