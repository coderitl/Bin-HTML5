/***************************/
// TODO: 集合关联
/***************************/
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://root:root@127.0.0.1/school?authSource=admin", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch(() => {
    console.log("数据库连接失败");
  });

// 创建 User 规则
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
});
// 创建 POST 规则
const postSchema = new mongoose.Schema({
  title: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // 将 id 作为 关联字段
});

// 使用规则 集合名称
const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// 添加数据
User.create({ name: "Node-User" }).then((result) => {
  console.log(result);
});

Post.create({ title: "Node-Post", author: "602a0b486925a224fcecf235" }).then(
  (result) => {
    console.log(result);
  }
);

Post.find()
  .populate("author")
  .then((result) => {
    console.log(result);
    /*
    [
  {
    _id: 602a0b624e405f43d860083a,
    title: 'Node-Post',
    author: { _id: 602a0b486925a224fcecf235, name: 'Node-User', __v: 0 },
    __v: 0
  }
]
    */
  });
