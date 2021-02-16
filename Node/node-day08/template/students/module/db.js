const mongoose = require("mongoose");
mongoose
  .connect("mongodb://root:root@127.0.0.1/school?authSource=admin")
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch((error) => {
    console.log("数据库连接失败: ", error);
  });

// 创建集合实例
const Students = new mongoose.Schema({
  name: { type: String, required: true },
  age: {
    type: Number,
    min: 10,
    max: 25,
  },
  sex: { type: String },
  email: String,
  hobbies: [String],
  enterDate: {
    type: Date,
    default: Date.now,
  },
});

// 使用集合规则
const Stu = mongoose.model("Stu", Students);
// 导出 Stu
module.exports = Stu;
