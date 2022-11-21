console.log('b1--');
exports.finish = false;
const a = require('./a');
console.log('b2--', a.finish);
exports.finish = true;
console.log('b3--');