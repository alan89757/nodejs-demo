console.log('main1--');
const a = require('./a');
const b = require('./b');
console.log('main2--', a.finish, b.finish);

// main1
// a1
// b1
// b2 false
// b3
// a2 true
// a3
// main2 true true

