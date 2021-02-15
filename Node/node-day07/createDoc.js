/***************************/
// TODO: 使用新方法创建文档
/***************************/

// 导入模块
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://root:root@127.0.0.1/school?authSource=admin", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("连接成功");
  })
  .catch((error) => {
    console.log("连接失败: ", error);
  });

// 创建集合规则
const teacherSchema = new mongoose.Schema({
  classroom: String,
  ontime: String,
  isSleep: Boolean,
});
// 使用集合规则
const NewTeacher = mongoose.model("newTeacher", teacherSchema);
// 创建文档
NewTeacher.create({
  course: "Javascript",
  classroom: "1101",
  ontime: "10:00",
  isSleep: false,
})
  .then((doc) => {
    console.log("当前文档: ", doc);
  })
  .catch((error) => {
    console.log("错误对象: ", error);
  });
