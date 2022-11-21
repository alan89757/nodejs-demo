// 比较 setTimeout 和 setImmediate 在不同情况下的优先级
const fs = require('fs');
const now = Date.now();

// 不在 I/O 回调内
setImmediate(() => console.log('immediate'));
// 0 => 1
setTimeout(() => console.log('timer'), 1000);
fs.readFile('./test2.b', () => console.log('readfile'));
while (Date.now() - now < 1000) {}

// 在 I/O 回调内
// fs.readFile('./test.txt', () => {
//   console.log('readfile');
//   setTimeout(() => console.log('timer'), 0);
//   setImmediate(() => console.log('immediate'));
// });
