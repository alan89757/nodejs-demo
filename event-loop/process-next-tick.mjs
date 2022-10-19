setImmediate(() => {
  console.log('timeout1')
  setTimeout(() => {
    console.log('timeout10')
  }, 0);
  Promise.resolve().then(() => console.log('promise resolve'))
  process.nextTick(() => console.log('next tick1'));  // 优先于微任务执行
});
setImmediate(() => {
  console.log('timeout2')
  process.nextTick(() => console.log('next tick2'))
});
setImmediate(() => console.log('timeout3'));
setImmediate(() => console.log('timeout4'));