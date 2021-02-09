// 加载 http 核心模块
var http = require("http");
// 使用 http.createServer() 方法创建一个 Web 服务器 返回一个 server 实例
var server = http.createServer();
// 服务器要干嘛
/*
    提供服务: 对数据的服务
    发送请求
    接受请求
    处理请求
    给个反馈(发送响应)
    注册 request 请求 
    当客户端请求过来,就会自动触发服务器的 request 请求事件,  然后执行第二个参数: 回调处理
*/
server.on("request", function (request, response) {
  response.setHeader("Content-Type", "text/plain;charset=utf-8");
  console.log("收到客户端的请求了··" + request.url);
  if (request.url == "/") {
    response.write("根目录···");
  }
  if (request.url == "/login") {
    console.log("登录");
  }
  /*
      response 对象有一个方法 write 可以用来给客户端发送响应数据
      write 可以使用多次,但是最后一定要使用 end 来结束响应 否则客户端会一直等待
      */
  response.write("响应···");
  // 告诉客户端 我的话说完了 你可以直接呈递给用户
  response.end();
});

// 绑定端口号
server.listen(3031, function () {
  console.log("服务器启动成功，可以通过 http://127.0.0.1:3000/ 进行访问了");
});
