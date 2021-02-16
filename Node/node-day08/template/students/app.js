/*********************************************/
// 引入自定义模块
// require("/module/appRouter");
/*********************************************/
const path = require("path");
// 引入路由模块
const getRouter = require("router");
// 获取路由对象
const router = getRouter();
// TODO:  test 路由
router.get("/test", (req, res) => {
  res.end("/test");
});

// TODO: index 路由
router.get("/index", (req, res) => {
  res.end("/index");
});

/*********************************************/
// 引入系统模块
const http = require("http");
const server = http.createServer();
/*********************************************/

/*********************************************/
// 引入静态资源模块
const serveStatic = require("serve-static");
// 实现静态资源访问 参数为静态资源目录
const serve = serveStatic(path.join(__dirname, "public"));
/*********************************************/

server.on("request", (req, res) => {
  // 启用路由
  router(req, res, () => {
    console.log("被调用");
  });
});
server.listen(3031, () => {
  console.log("服务器启动成功···");
});
