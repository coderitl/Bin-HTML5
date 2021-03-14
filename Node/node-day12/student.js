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
      // console.log(typeof JSON.parse(data).students);
      // callback 中的参数: 第一个是: 错误对象 第二个是: 数据
      callback(null, JSON.parse(data).students);
    }
  });
};



exports.findById = ((id, callback) => {
  fs.readFile(dbpath, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    } else {
      let students = JSON.parse(data).students;
      let ret = students.find((item) => {
        return item.id == id;
      });
      callback(null, ret);
    }
  });
});


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
      let result = JSON.stringify({
        students: students
      });
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
 * 更新学生信息
 *
 */

exports.updateById = (student, callback) => {
  // 如果要获取一个函数中异步操作的结果 则必须通过回调函数来获取
  fs.readFile(dbpath, "utf8", (err, data) => {
    if (err) {
      return callback(err);
    } else {
      // find: 需要接受一个函数作为参数 作用: 当某个遍历项符合 item.id===student.id 条件的时候 find 会终止遍历 同时返回遍历结果
      let students = JSON.parse(data).students;

      student.id = parseInt(student.id);
      var stu = students.find((item) => {
        // 用户传入 id
        return item.id === student.id
      });

      // 修改数据
      for (let key in student) {
        stu[key] = student[key];
      }
      // 把对象转换为字符串
      let fileDate = JSON.stringify({
        students: students
      });
      // 把字符串保存到文件中
      fs.writeFile(dbpath, fileDate, (err) => {
        if (err) {
          // 错误就是把错误对象传递给它
          return callback(err);
        } else {
          // 成功就没错 所以错误对象就是 null
          return callback(null);
        }
      });
    }
  });


};



/*
 * 删除学生
 *
 */
exports.deleteById = (id, callback) => {
  fs.readFile(dbpath, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    } else {
      let students = JSON.parse(data).students;

      // findIndex 方法专门用来根据条件查找元素的下标
      let deleteId = students.findIndex((item) => {
        return item.id === parseInt(id);
      });
      // 根据下标从数组中删除对应的学生对象
      students.splice(deleteId, 1);
      // 删除数据后进行重写
      let fileData = JSON.stringify({
        students: students
      });
      // 把字符串保存到文件中
      fs.writeFile(dbpath, fileData, (err) => {
        if (err) {
          // 错误就是把错误对象传递给它
          return callback(err);
        } else {
          // 成功就是没错 所以把错误对象就是 null
          callback(null);
        }
      });

    }
  });
};