// 异步 async
// 同步 sync
/* TODO: 同步异步的执行顺序 */

  console.log("before···");
  setTimeout(() => {
    console.log("last···");
  }, 20);
  console.log("after···");