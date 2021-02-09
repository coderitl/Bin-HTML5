var http = request("http");
var server = http.createServer();

// 监听 server 的 request 请求事件
server.on("request", function (req, res) {
  var url = req.url;
  if (url === "/") {
    res.end("根目录···");
  }
});

// 绑定端口号 启动服务
server.listen(3031, function (error) {
  console.log("可以通过 127.0.0.1:3031/ 来访问了");
});
