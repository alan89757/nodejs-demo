
console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);

setImmediate(()=> {
  console.log(3);
})



console.log(4);


// 1 4 2 3 可以证明先执行timers阶段的回调