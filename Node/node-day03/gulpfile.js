// 引入 gulp
const gulp = require("gulp");
// 引用插件
const htmlmin = require("gulp-htmlmin");
// 抽取公共 引用方法 @@include('file-path') 任务有执行顺序
const fileinclude = require("gulp-file-include");

// html 任务 压缩 html
// 建立任务
gulp.task("htmlmin", () => {
  return (
    gulp
      // 获取处理任务路径
      .src("./src/*.html")
      // 压缩 html 文件中的代码 collapseWhitespace 压缩空格? true 是 pipe( 任务事件 )
      .pipe(htmlmin({ collapseWhitespace: true }))
      // 输出
      .pipe(gulp.desc("dist"))
  );
});

// 使用 gulp.task() 方法建立任务
// 参数: 1.任务的名称
// 参数: 2. 任务的回调
gulp.task("first", () => {
  console.log("第二个 gulp 任务启动");
  // 获取要处理的文件
  gulp
    .src("./src/css/index/style.css")
    // 将处理后的文件输出到 dist 目录，dest输出
    .pipe(gulp.dest("./dist/css/index"));
});
// 全局安装命令工具 npm install gulp-cli -g


// 构建任务
gulp.task('default',['htmlmin','first'])