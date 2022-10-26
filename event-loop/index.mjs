// process.nextTick、promise、setImmediate、setTimeout优先级比较
 
// 事件循环的各阶段执行队列任务之前，会先复制当前时间的该阶段的队列
// 事件循环的各阶段执行队列任务，直到队列耗尽或者达到上限
// 进入各阶段之前，会执行微任务队列(nextTick队列和promise队列)
Promise.resolve().then(() => console.log('promise1'));
Promise.resolve().then(() => {
  console.log('promise2');
  Promise.resolve().then(() => console.log('promise in promise'));
});
Promise.resolve().then(() => {
  console.log('promise3');
  process.nextTick(() => console.log('next tick in promise'));
});
Promise.resolve().then(() => console.log('promise4'));
Promise.resolve().then(() => console.log('promise5'));
 
// 宏任务里边的宏任务总是会放到下一轮询，微任务立即执行？
setImmediate(() => console.log('immediate1'));
setImmediate(() => {
  console.log('immediate2');
  process.nextTick(() => console.log('next tick in immediate'));
  Promise.resolve().then(() => {
    console.log('promise in immediate');
    process.nextTick(() => console.log('next tick in promise in immediate'));
  });
  setImmediate(() => console.log('inner immediate'));
});
 
// 如果上面的Promis里面加个Promise试一下
process.nextTick(() => console.log('next tick1'));
process.nextTick(() => {
  console.log('next tick2');
  process.nextTick(() => console.log('inner next tick'));
});
process.nextTick(() => console.log('next tick3'));
 
setTimeout(() => {
  console.log('timeout');
  // 是在执行第一个定时器回调的时候添加到队列的，不是一开始就在队列
  setTimeout(() => console.log('inner timeout'), 0);
}, 0);
 
setImmediate(() => console.log('immediate3'));
setImmediate(() => console.log('immediate4'));




