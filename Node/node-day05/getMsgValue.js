// 同步函数返回值问题
function sum(n1, n2) {
  return n1 + n2;
}
const value = sum(2, 3);
console.log(value); // 5

// 异步函数返回值问题
function getMsg() {
  setTimeout(() => {
    return "异步执行";
  }, 20);
}
const msg = getMsg();
console.log("return msg result: ", msg); // undefined
