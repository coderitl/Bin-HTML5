const fs = require("fs");
// 改造现有异步函数 api 让其返回 promise 对象 从而支持异步函数语法
const promisify = require("util").promisify;
const readFile = promisify(fs.readFile);

async function run() {
  let r1 = await readFile("./A.txt", "utf8");
  let r2 = await readFile("./B.txt", "utf8");
  let r3 = await readFile("./C.txt", "utf8");
  console.log(r1, r2, r3);
}
run()