// 引入 express 框架
const express = require("express");
// 创建服务
const app = express();
app.get('/index',(req,res)=>{
    res.send(req.url);
  console.log(req.query); // { name: 'zhangsan', age: '10' }
});

app.listen(3031, () => {
  console.log("服务启动成功···");
});
