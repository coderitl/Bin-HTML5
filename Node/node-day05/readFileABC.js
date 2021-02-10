const fs = require("fs");
fs.readFile("./A.txt", "utf8", (error, data) => {
  console.log(data.toString());
  fs.readFile("./B.txt", "utf8", (error, data) => {
    console.log(data.toString());
    fs.readFile("./C.txt", "utf8", (error, data) => {
      console.log(data.toString());
    });
  });
});
// promise 的基础使用 解决Node.js 的回调地狱

function p1() {
  return (promise1 = new Promise((resolve, reject) => {
    // 读取文件
    fs.readFile("A.txt", "utf8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data.toString());
      }
    });
  }));
}
function p2() {
  return (promise2 = new Promise((resolve, reject) => {
    // 读取文件
    fs.readFile("B.txt", "utf8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data.toString());
      }
    });
  }));
}
function p3() {
  return (promise3 = new Promise((resolve, reject) => {
    // 读取文件
    fs.readFile("C.txt", "utf8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data.toString());
      }
    });
  }));
}

p1()
  .then((r1) => {
    console.log(r1);
    return p2();
  })
  .then((r2) => {
    console.log(r2);
    return p3();
  })
  .then((r3) => {
    console.log(r3);
  });


  // 异步函数
  
