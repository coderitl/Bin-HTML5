// 导入模板引擎
const template = require("art-template");
// 引入系统模块 path
const path = require("path");
// 路径拼接
const views = path.join(__dirname, "views", "index.art");

const html = template(views, {
  age: 12,
  name: "<h1>Node</h1>",
  dataInfo: [
    { name: "zs", age: 10, address: "zs" },
    { name: "as", age: 20, address: "as" },
  ],
});
console.log(html);
