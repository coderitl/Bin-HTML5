const http = require("http");
const server = http.createServer();
const url = require("url");
server.on("request", (req, res) => {
  res.writeHeader(200, {
    "content-type": "text/html;charset=utf8",
  });
  // 获取请求方式
  const method = req.method.toLowerCase();
  console.log(method); // GET---  toLowerCase() ---> get
  // 获取请求地址
  const pathname = url.parse(req.url).pathname;
  console.log("pathname: ", pathname); // pathname:  /index
  if (method == "get") {
    if (pathname == "/" || pathname == "/index") {
      res.end("<h1> return get index home page </h1>");
    } else {
      res.end("<h1>Not Found GET</h1>");
    }
  }
  if (method == "post") {
    if (pathname == "/" || pathname == "/index") {
      res.end("<h1> return post index home page </h1>");
    } else {
      res.end("<h1>Not Found POST</h1>");
    }
  }
});

server.listen(3031, (error) => {
  console.log("ok");
});
