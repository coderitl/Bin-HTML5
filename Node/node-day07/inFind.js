/***************************/
// TODO: > < >= <=
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
// 插入数据 创建文档 {}
// for (var i = 0; i < 10; i++) {
//   Book.create({
//     auth: "tuling" + i,
//     bookname: "Node-JS",
//     price: i,
//     address: "xi-an",
//   })
//     .then((result) => {
//       // 打印查看当前插入的文档
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// TODO: 范围查询 查询价格大于 8 的书籍信息
Book.find({ price: { $gt: 8 } }).then((result) => {
  console.log("price大于8: ", result);
});

// TODO: 范围查询 查询价格大于等于 8 的书籍信息
Book.find({ price: { $gte: 8 } }).then((result) => {
  console.log("price大于等于8: ", result);
});

// TODO: 范围查询 查询价格小于等于 8 的书籍信息
Book.find({ price: { $lte: 8 } }).then((result) => {
  console.log("price小于等于8: ", result);
});
console.log("---------------------------------------------");
// TODO: 大于 5 小于 8 的书籍信息
Book.find({ price: { $gt: 5, $lt: 8 } }).then((result) => {
  console.log("price大于5小于8: ", result);
});

// TODO: in [1,5,8] 的书籍信息
Book.find({ price: { $in: [1, 5, 8] } }).then((result) => {
  console.log("price 1 5 8: ", result);
});
// 查询字段
Book.find().select('auth price -_id').then((result) => {
  console.log("查询字段: ", result);
});