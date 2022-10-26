// 测试nextTick的循环调用，导致性能问题的原因之一
const fs = require('fs');

function addNextTickRecurs(count) {
  let self = this;
  if (self.id === undefined) {
    self.id = 0;
  }

  if (self.id === count) return;

  process.nextTick(() => {
    console.log(`process.nextTick：${++self.id}`);
    addNextTickRecurs.call(self, count);
  });
}

addNextTickRecurs(10);
setTimeout(console.log.bind(console, 'setTimeout'), 10);
setImmediate(console.log.bind(console, 'setImmediate'));
fs.readFile('./test.txt', (err, data) => {
  console.log(data);
});

console.log('脚本结束');
