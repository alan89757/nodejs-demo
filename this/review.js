// var temp = {};
// module.exports = temp;
// exports = temp;
// this = temp;
exports.name = 'Alan';  // 1.temp上面加了name属性, module.exports，exports和this都指向了temp对象
module.exports = { // 2. module.exports指向了新对象{count: 3}，exports和this还指向temp对象
  count: 123
}
exports = {  // 3. exports指向了新对象{hello: 'world'}，this还指向了temp
  hello: 'world'
}
console.log('this: ', this);  // {name: 'Alan'}