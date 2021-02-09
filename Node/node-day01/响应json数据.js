// 引入 http 模块
var http = require("http");
// 创建 server
var server = http.createServer();
// 发送
server.on("request", function (request, response) {
    console.log("收到请求了: " + request.url);
    // 根据不同的请求的路径,响应不同的内容
    var url = request.url;
    // 定义json 类型数据
    var products = [
        {
            brand: "xiaomi",
            price: 6699,
            color: "blue",
        },
        {
            brand: "iPhone",
            price: 9988,
            color: "purple",
        },
        {
            brand: "huawei",
            price: 9988,
            color: "blue",
        },
    ];
    // 响应的内容只能是 二进制数据或者字符串
    if (url === "/products") {
        console.log(JSON.stringify(products));
        response.end(JSON.stringify(products));
    }
});
// 绑定端口号
server.listen(3101, function () {
    console.log("服务器启动成功···可以通过127.0.0.1:3031 来访问了");
});
