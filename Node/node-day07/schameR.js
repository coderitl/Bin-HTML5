/***************************/
// TODO: schema
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

/*
const CSchema = new mongoose.Schema({
  auth: {
    type: String,
    required: true, // 必填项，错误信息不友好
  },
});

*/
const CSchema = new mongoose.Schema({
  auth: {
    type: String,
    required: [true, "请输入作者"], // [true,'message'] 自定义错误信息
    minlength: 2,
    maxKength: 5,
  },
  age: {
    type: Number,
    min: 18,
    max: 100,
  },
  publishDate: {
    type: Date,
    default: Date.now, // 获取默认值 当前时间 命令行不可见,compass 工具可见
  },
  categories: {
    type: String,
    enum: ["java", "javascript", "javac"], // 自定义规则
  },
  rFn: {
    type: String,
    validate: {
      validator: (v) => {
        // 返回布尔值
        // true 验证成功
        // false 验证失败
        // value 要验证的值
        return v && v.lenght > 2; // 自定义规则
      },
      // 自定义错误信息
      message: "错误信息不符合验证规则",
    },
  },
});

// 使用集合规则
const Cschema = mongoose.model("Schma", CSchema);
Cschema.create({ auth: "Nodejs", age: 23, categories: "javac", rFn: "bbc" })
  .then((result) => {
    console.log("成功: ", result);
  })
  .catch((error) => {
    // 获取错误对象
    const err = error.errors;
    // 循环错误信息对象
    for (let attr in err) {
      // 将错误信息打印到控制台
      console.log(err[attr]["message"]);
    }
  });
