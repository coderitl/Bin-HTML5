// 异步函数
async function fn() {
  // throw 'throw error infomation';
  return "return result data";
}
console.log(fn()); // Promise { undifined }

fn()
  .then((data) => {
    console.log(data); //成功: Promise { 'return result data' }
  })
  .catch((error) => {
    console.log(error); //失败: Promise { <rejected> 'throw error infomation' }
  });
