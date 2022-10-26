console.log(1)
exports.finish = false;
const b = require('./b');
console.log('在a中b的属性：', b.finish);
exports.finish = true;
console.log(2);



// 1 3 