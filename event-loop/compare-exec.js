Promise.resolve().then(() => console.log('p1'));
Promise.resolve().then(() => {
  console.log('p2');
  Promise.resolve().then(() => console.log('p3'));
});
Promise.resolve().then(() => {
  console.log('p4');
  process.nextTick(() => console.log('tick1'));
});
Promise.resolve().then(() => console.log('p5'));
Promise.resolve().then(() => console.log('p6'));

// 宏任务里边的宏任务总是会放到下一轮询，微任务立即执行？
setImmediate(() => console.log('immediate1'));
setImmediate(() => {
  console.log('immediate2');
  process.nextTick(() => console.log('tick2'));
  Promise.resolve().then(() => {
    console.log('p7');
    process.nextTick(() => console.log('tick3'));
  });
  setImmediate(() => console.log('immediate3'));
});

// 如果上面的Promis里面加个Promise试一下
process.nextTick(() => console.log('tick4'));
process.nextTick(() => {
  console.log('tick5');
  process.nextTick(() => console.log('tick6'));
});
process.nextTick(() => console.log('tick7'));

setTimeout(() => {
  console.log('timeout1');
  // 是在执行第一个定时器回调的时候添加到队列的，不是一开始就在队列
  setTimeout(() => console.log('timeout2'), 0);
}, 0);

setImmediate(() => console.log('immediate4'));
setImmediate(() => console.log('immediate5'));
