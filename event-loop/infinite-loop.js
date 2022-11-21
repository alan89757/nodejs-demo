// nextTick每个阶段执行之前都要清空nextTick队列
const fs = require('fs');

function addNextTickRecurs(count) {
  let self = this;
  if(self.id === undefined) { self.id = 0;}
  if(self.id === count) return ;
  process.nextTick(()=> {
    console.log(`process.nextTick:${++self.id}`)
    addNextTickRecurs.call(self, count);
  })
}
addNextTickRecurs(1000);  // 创建1000个Ticks，所以会阻塞事件循环

setTimeout(console.log.bind(console, 'setTimeout'), 10);

setImmediate(console.log.bind(console, 'setImmediate'));

// 1 2 ...1000
// 事件循环先从timers阶段开始清空任务队列
