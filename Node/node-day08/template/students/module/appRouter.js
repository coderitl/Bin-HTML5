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

