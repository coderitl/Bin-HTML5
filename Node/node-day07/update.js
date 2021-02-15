/***************************/
// TODO: update
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

// 根据条件更新一条文档 将价格为 2 的书籍价格更新为 22
Book.updateOne({ price: 2 }, { price: 22 }).then((result) => {
  console.log(result); // { n: 1, nModified: 1, ok: 1 }
});

// 更新多条 所有价格更改为 22
Book.updateMany({}, { price: 22 }).then((result) => {
  console.log(result);
});

// 更新多个字段
