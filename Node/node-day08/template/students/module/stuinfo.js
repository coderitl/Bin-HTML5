const mongoose = require("mongoose");
const Stu = require("./db");

// 创建数据
Stu.create({
    
})
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
console.log(Stu);
