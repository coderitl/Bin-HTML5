// 主要是由于系统不同使用的路径分隔符不同
// 拼接如下路径 public/img/avatar

const path = require("path");
const filepath = path.join("public", "img", "avatar");

console.log(filepath);

console.log('update: update node-day02 node js file');