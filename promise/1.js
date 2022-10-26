// process.nextTick、promise、setImmediate、setTimeout优先级比较
Promise.resolve().then(() => console.log(1));
Promise.resolve().then(() => {
  console.log(2);
  Promise.resolve().then(() => console.log(3)); // promise队列清空后才会执行nextTicks队列
});
Promise.resolve().then(() => {
  console.log(4);
  process.nextTick(() => console.log(5)); // 
});
Promise.resolve().then(() => console.log(6));
Promise.resolve().then(() => console.log(7));

// 宏任务里边的宏任务总是会放到下一轮询，微任务立即执行？
setImmediate(() => console.log(8));
setImmediate(() => {
  console.log(9);
  process.nextTick(() => console.log(10));
  Promise.resolve().then(() => {
    console.log(11);
    process.nextTick(() => console.log(12));
  });
  setImmediate(() => console.log(13));
});

// 如果上面的Promis里面加个Promise试一下
process.nextTick(() => console.log(14));
process.nextTick(() => {
  console.log(15);
  process.nextTick(() => console.log(16));
});
process.nextTick(() => console.log(17));

setTimeout(() => {
  console.log(18);
  // 是在执行第一个定时器回调的时候添加到队列的，不是一开始就在队列
  setTimeout(() => console.log(19), 0);
}, 0);

setImmediate(() => console.log(20));
setImmediate(() => console.log(21));
