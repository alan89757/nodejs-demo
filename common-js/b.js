console.log(3);
exports.finish = false;
const a = require('./a');
console.log('在b中a的属性：', a.finish);
exports.finish = true;
console.log(4);