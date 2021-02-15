// 引入 mongoose  模块
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/student", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch((error) => {
    console.log("连接失败");
    return;
  });


