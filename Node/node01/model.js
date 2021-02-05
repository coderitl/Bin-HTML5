/* 
模块化: 
    - 在 Node 中 一个 js 文件就是一个模块
    - 在 Node 中,每一个 js 文件中的 js 代码都是独立运行在一个函数中
*/
// 外部模块的引入: require('file-path')
/*
在 node 模块中,通过 require() 函数来引入外部的模块
    require() 可以传递一个文件的路径作为参数, node 将会自动根据该路径来引入外部模块

    使用 require() 引入模块以后,该函数会返回一个对象，这个对象代表是引入的模块

*/

/*
exports 向外部暴露变量和方法
只需要将需要暴露给外部的变量或方法设置为 exports 的属性
*/
var hello = require('./helloNode.js')
console.log(hello);
console.log(hello.x);