/***************************/
// TODO: 连接mongoose和插入数据
/***************************/
// 导入模块
const mongoose = require("mongoose");
// 连接数据库
mongoose
  .connect(
    // mongodb[协议]://user:password@host:port/database-name
    "mongodb://root:root@127.0.0.1:27017/school?authSource=admin",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => {
    console.log("---------------------------");
    console.log("数据库连接成功");
    console.log("---------------------------");
  })
  .catch((error) => {
    console.log("---------------------------");
    console.log("数据库连接失败: ", error);
    console.log("---------------------------");
  });

// 创建集合规则
const teacherSchema = new mongoose.Schema({
  // 教师: 课程 班级 上课周期 是否休假
  course: String,
  classroom: String,
  ontime: String,
  isSleep: Boolean,
});

// 使用规则创建集合 创建集合 Teacher，使用 teacherSchema 规则
const Teacher = mongoose.model("Teacher", teacherSchema);
// 查询集合的所有数据
/*
Teacher.find().then((result) => {
  console.log(result);
});

*/
// 根据条件查询 某一条数据
Teacher.find({ _id: "6029d92dc0749738e8df4d62" }).then((result) => {
  console.log(result);
});
// findOne 查找为第一条数据
Teacher.findOne().then((result) => {
  console.log(result);
});

// TODO: find 和 finOne 的区别: find 返回一组 [],findOne 返回一个
/*
********************** find **************************
[
  {
    _id: 6029d92dc0749738e8df4d62,
    course: 'node.js',
    classroom: '1801',
    ontime: '12:00',
    isSleep: true,
    __v: 0
  }
]
********************** findOne **************************
{
  _id: 6029d5297f11ef1e1c60bb6f,
  course: 'node.js',
  classroom: '1801',
  ontime: '12:00',
  isSleep: true,
  __v: 0
}
*/