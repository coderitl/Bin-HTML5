// 引入 express 框架
const express = require("express");
// 路径处理模块
const path = require("path");
// post 所需要
const bodyParser = require("body-parser");




// 系统模块
const fs = require("fs");

// 创建WEB 服务器
const app = express();
// bodyParser.urlencoded --> 解析格式: application/x-www-form-urlencoded
app.use(bodyParser.json()); // 解析 JSON 格式

app.use(bodyParser.urlencoded({ extended: false }));




// 静态资源访问服务器功能
app.use(express.static(path.join(__dirname, "public")));

// 创建路由
app.get("/first", (req, res) => {
  res.send("入门了···");
});

// JSON 数据
app.get("/responseData", (req, res) => {
  res.send({ name: "zs" });
});
// 参数传递
app.get("/get", (req, res) => {
  res.send(req.query);
});

//  post 请求参数
app.post("/post", (req, res) => {
  res.send(req.body);
});

// json 格式参数
app.post("/json", (req, res) => {
  res.send(req.body);
});

// 错误处理
app.get("/error", (req, res) => {
  res.status(400).send("not ok");
});

// IE 缓存
app.get("/cache", (req, res) => {
  fs.readFile("./hello.txt", (err, result) => {
    res.send(result);
  });
});

// 邮箱验证案例

// 邮箱地址验证
app.get("/verifyEmailAdress", (req, res) => {
  // 接收客户端传递过来的邮箱地址
  const email = req.query.email;
  // 判断邮箱地址注册过的情况
  if (email == "3327511395@qq.com") {
    // 设置http状态码并对客户端做出响应
    res
      .status(400)
      .send({ message: "邮箱地址已经注册过了, 请更换其他邮箱地址" });
  } else {
    // 邮箱地址可用的情况
    // 对客户端做出响应
    res.send({ message: "恭喜, 邮箱地址可用" });
  }
});

// 搜索框自动提示
// 输入框文字提示
app.get("/searchAutoPrompt", (req, res) => {
  // 搜索关键字
  const key = req.query.key;
  // 提示文字列表
  const list = ["abcde", "abcedfg", "abc"];
  // 搜索结果
  let result = list.filter((item) => item.includes(key));
  // 将查询结果返回给客户端
  res.send(result);
});

// 省级联动
// 获取省份
app.get("/province", (req, res) => {
  res.json([
    {
      id: "001",
      name: "黑龙江省",
    },
    {
      id: "002",
      name: "四川省",
    },
    {
      id: "003",
      name: "河北省",
    },
    {
      id: "004",
      name: "江苏省",
    },
  ]);
});

// 根据省份id获取城市
app.get("/cities", (req, res) => {
  // 获取省份id
  const id = req.query.id;
  // 城市信息
  const cities = {
    "001": [
      {
        id: "300",
        name: "哈尔滨市",
      },
      {
        id: "301",
        name: "齐齐哈尔市",
      },
      {
        id: "302",
        name: "牡丹江市",
      },
      {
        id: "303",
        name: "佳木斯市",
      },
    ],
    "002": [
      {
        id: "400",
        name: "成都市",
      },
      {
        id: "401",
        name: "绵阳市",
      },
      {
        id: "402",
        name: "德阳市",
      },
      {
        id: "403",
        name: "攀枝花市",
      },
    ],
    "003": [
      {
        id: "500",
        name: "石家庄市",
      },
      {
        id: "501",
        name: "唐山市",
      },
      {
        id: "502",
        name: "秦皇岛市",
      },
      {
        id: "503",
        name: "邯郸市",
      },
    ],
    "004": [
      {
        id: "600",
        name: "常州市",
      },
      {
        id: "601",
        name: "徐州市",
      },
      {
        id: "602",
        name: "南京市",
      },
      {
        id: "603",
        name: "淮安市",
      },
    ],
  };
  // 响应
  res.send(cities[id]);
});

// 根据城市id获取县城
app.get("/areas", (req, res) => {
  // 获取城市id
  const id = req.query.id;
  // 县城信息
  const areas = {
    300: [
      {
        id: "20",
        name: "道里区",
      },
      {
        id: "21",
        name: "南岗区",
      },
      {
        id: "22",
        name: "平房区",
      },
      {
        id: "23",
        name: "松北区",
      },
    ],
    301: [
      {
        id: "30",
        name: "龙沙区",
      },
      {
        id: "31",
        name: "铁锋区",
      },
      {
        id: "32",
        name: "富拉尔基区",
      },
    ],
  };
  // 响应
  res.send(areas[id] || []);
});

// 监听端口
app.listen(3000);
// 控制台显示输出
console.log("服务器启动成功···");
