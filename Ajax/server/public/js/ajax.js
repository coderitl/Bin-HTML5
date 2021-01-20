function ajax(options) {
  // 默认值
  var defaults = {
    type: "get",
    url: "",
    async: true,
    date: {},
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    success: function () {},
    error: function () {},
  };
  // 使用 options 对象中的属性覆盖 defaults 对象中的属性
  Object.assign(defaults, options);
  // 创建 Ajax 对象
  var xhr = new XMLHttpRequest();
  // 传递参数
  var params = "";
  // 遍历参数 对象用 for in
  for (var attr in defaults.data) {
    console.log(attr);
    // 将参数转换为字符串格式
    params += attr + "=" + defaults.data[attr] + "&";
  }
  // 将参数最后面的 & 截取掉
  // 将截取的结果重新赋值给 params 变量
  params = params.substr(0, params.length - 1);
  // 判断请求格式
  if (defaults.type == "get") {
    defaults.url = defaults.url + "?" + params;
  }
  // 配置 Ajax 对象
  xhr.open(defaults.type, defaults.url);
  // 如果请求方式为 post
  if (defaults.type == "post") {
    // 用户希望的向服务器传递的请求参数的类型
    var contentType = defaults.header["Content-Type"];
    xhr.setRequestHeader("Content-Type", contentType);
    // 判断用户希望的请求参数格式的类型
    // 如果用户希望为 json
    if (contentType == "application/json") {
      // 向服务器端传递 json 数据格式的参数
      xhr.send(JSON.stringify(defaults.data));
    } else {
      // 向服务器传递普通类型的请求参数
      xhr.send(params);
    }
  } else {
    xhr.send();
  }
  // 监听 xhr 下面的 onload 事件
  // 当 xhr 对象接受完响应数据后触发
  xhr.onload = function () {
    // 获取响应头中的信息
    var contentType = xhr.getResponseHeader("Content-Type");
    var responseText = xhr.responseText;
    if (contentType.includes("application/json")) {
      responseText = JSON.parse(responseText);
    }
    // 当 http 状态码等于 200 的时候
    if (xhr.status == 200) {
      // 请求成功 调用处理成功情况的函数
      defaults.success(responseText, xhr);
    } else {
      // 请求失败 调用处理失败情况的函数
      defaults.error(responseText, xhr);
    }
  };
}
