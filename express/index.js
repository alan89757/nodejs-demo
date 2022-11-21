const express = require('express');
const app = express();

// 中间件支持跨域
app.use((req, res, next)=> {
  res.header('Access-Control-Allow-Origin', '*')
  next();
})

// 声明式路由
app.get('/', (req, res)=> {
  res.send({
    name: "Alan"
  });
  // res.jsonp({name: "Alan"});
});

app.listen(3010, ()=> {
  console.log('server is up...')
})






// const express = require('express');
// const app = express();

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   // 调用下一个中间件
//   next();
// });

// // 声明式路由
// app.get('/', (req, res) => {
//   // jsonp跨域
//   // res.jsonp('Hello World!');
//   res.send('Hello World!');
// });

// // 链式调用
// app.route('/test')
//   .post((req, res) => {
//     res.send('post请求!');
//   })
//   .put((req, res) => {
//     res.send('put请求!');
//   })
//   .delete((req, res) => {
//     res.send('delete请求!');
//   });

// app.all('/other', (req, res) => {
//   res.send('都行吧');
// });

// // acd abcd
// app.all('/ab?cd/:id', (req, res) => {
//   res.send('字符串模式');
// });

// var first = (req, res, next) => {
//   console.log('第一步');
//   next();
// }

// var second = (req, res, next) => {
//   console.log('第二步');
//   next();
// }

// var third = (req, res, next) => {
//   console.log('第三步');
//   next();
// }

// app.all('/array', [first, second, third], (req, res) => {
//   res.send('完成');
// });

// // 匹配所有包含a的路径
// // app.all(/a/, (req, res) => {
// //   res.send('正则表达式');
// // });

// // 使用模块接口
// const user = require('./user');
// app.use('/users', user);

// // 404处理
// app.use((req, res, next) => {
//   res.status(404).send('页面不见了!');
// });

// app.listen(3000, () => {
//   console.log('再次起飞!');
// });

// // 静态文件的处理，支持虚拟路径映射
// app.use('/static', express.static(__dirname + '/public'));


