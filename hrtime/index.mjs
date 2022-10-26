var obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
var len = 20;
var before, res, took, str;
for (var i = 0; i < len; i++) {
  obj = { obj1: obj, obj2: obj };
}
before = process.hrtime();
str = JSON.stringify(obj);
took = process.hrtime(before);
console.log('JSON.stringify took ' + took);

before = process.hrtime();
res = str.indexOf('nomatch');
took = process.hrtime(before);
console.log('Pure indexof took ' + took);

before = process.hrtime();
res = JSON.parse(str);
took = process.hrtime(before);
console.log('JSON.parse took ' + took);
