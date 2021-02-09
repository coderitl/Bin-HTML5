// fs 模块
var fs = require("fs");

// 文件读取
fs.readFile("./b.txt", function (error, data) {
  if (error) {
    console.log("读取文件失败");
    return;
  } else {
    console.log(data.toString());
  }
  /*
    第一个参数就是要读取的文件路径
    第二个参数就是回调函数
        成功
            data 数据
            error null
        失败
            data null
            error 错误对象
  */
});
