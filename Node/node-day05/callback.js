// TODO: 异步函数通过回调函数获取返回值
function getData(callback) {
  setTimeout(() => {
    callback({
      msg: "hello node js",
    },20);
  });
}
getData(function (data) {
  console.log(data);
});

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log('for 循环后面的代码');