async function fn1() {
  return "fn1";
}
async function fn2() {
  return "fn2";
}
async function fn3() {
  return "fn3";
}

// 顺序执行 异步函数
async function runFn() {
  let r1 = await fn1();
  let r2 = await fn2();
  let r3 = await fn3();
  console.log(r1, r2, r3);
}

runFn();
