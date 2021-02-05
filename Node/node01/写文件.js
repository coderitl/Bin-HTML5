var fs = require("fs");

fs.writeFile("./hello.txt", "我是写入内容", function (error) {

    console.log("写入完毕");

    fs.readFile("./hello.txt", function (error, data) {
        console.log(data.toString());
    });
});
