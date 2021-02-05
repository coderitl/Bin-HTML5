// 引入 http 模块
var http = require("http");
// 创建 server
var server = http.createServer();
// 发送
server.on("request", function (request, response) {
    console.log("收到请求了: " + request.url);
    // 根据不同的请求的路径,响应不同的内容
    var url = request.url;
    if (url === "/") {
        response.end("index Page");
    } else if (url === "/login") {
        response.end("user login");
    } else if (url === "/register") {
        response.end("user register");
    } else {
        response.end("response ·····");
    }
});
// 绑定端口号
server.listen(3101, function () {
    console.log("服务器启动成功···可以通过127.0.0.1:3031 来访问了");
});
