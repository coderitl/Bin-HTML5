/***************************/
// TODO: delete
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

// 创建集合
const Books = new mongoose.Schema({
  auth: String,
  bookname: String,
  price: Number,
  address: String,
});
// 使用集合规则
const Book = mongoose.model("Book", Books);

// TODO:查找到一条文档并且删除
// 返回删除的文档 如果查询条件匹配了多个文档 那么将会删除第一个匹配的文档
Book.findOneAndDelete({ price: 1 }).then((result) => {
  console.log("删除数据: ", result);
});

// 删除多个文档 删除价格大于 7 书籍信息
// TODO: 传递空对象会将整个文档删除，执行完毕返回结果为对象， { n: 2, ok: 1, deletedCount: 2 } n: 删除文档树 ok: 删除成功
Book.deleteMany({ price: { $gt: 7 } }).then((result) => {
  console.log(result);
});
