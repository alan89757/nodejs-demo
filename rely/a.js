console.log('a1--');
exports.finish = false;
const b = require('./b');
console.log('a2--', b.finish);
exports.finish = true;
console.log('a3--');
