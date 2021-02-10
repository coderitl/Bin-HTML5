const fs = require("fs");
let promise = new Promise((resolve, reject) => {
  // 读取文件
  fs.readFile("D.txt", "utf8", (error, data) => {
    if (error) {
      reject(error);
    } else {
      resolve(data.toString());
    }
  });
});

promise
  .then((result) => {
    // 获取读取成功的结果
    console.log(result);
  })
  .catch((error) => {
    // 或去读取失败
    console.log(error);
  });
