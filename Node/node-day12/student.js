/* *
 * student.js 不关心业务逻辑
 * 数据操作模块
 * 职责: 操作文件中的数据 只处理数据 不关心业务
 */

const fs = require("fs");
const path = require("path");
let pathname = path.join(__dirname);

const dbpath = pathname + "\\db.json";

/*
 * 获取所有学生列表
 *
 */

exports.find = (callback) => {
  // 如果要获取一个函数中异步操作的结果 则必须通过回调函数来获取
  fs.readFile(dbpath, "utf8", (err, data) => {
    if (err) {
      return callback(err);
    } else {
      console.log(typeof JSON.parse(data).students);
      // callback 中的参数: 第一个是: 错误对象 第二个是: 数据
      callback(null, JSON.parse(data).students);
    }
  });
};

/*
 * 添加保存学生
 *
 */

exports.save = (student, callback) => {
  fs.readFile(dbpath, "utf8", (err, data) => {
    if (err) {
      return callback(err);
    } else {
      let students = JSON.parse(data).students;
      // 处理 id: 获取数组的最后一个 再加 1
      student.id = students[students.length - 1].id + 1;
      // 添加数据
      students.push(student);
      // 把对象数据转换为字符串
      let result = JSON.stringify({ students: students });
      // 把字符串保存到文件中
      fs.writeFile(dbpath, result, (err) => {
        if (err) {
          // 错误 就返回错误对象
          return callback(err);
        } else {
          // 成功就不报错 返回空对象
          callback(null);
        }
      });
    }
  });
};

/*
 * 更新所有学生信息
 *
 */
exports.update = () => {};

/*
 * 删除学生
 *
 */
exports.delete = () => {};
