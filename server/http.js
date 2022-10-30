const http = require("http");
const querystring = require('querystring')

const server = http.createServer((req, res)=> {
  console.log('req.url--', req.url);
  const params = querystring.parse(req.url.split('?')[1]); // 获取url中的参数
  console.log('params--', params);

  if(params.name) {
    let source = Buffer.from(params.name, 'utf-8');  // 把url参数信息专门放二进制缓冲区,方便转换格式
    console.log('source--', source)
    let target = source.toString('hex'); // 转换为16进制数据
    console.log('target--', target)
  }
 
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello world')
});

const port = 3000;
const hostname = '127.0.0.1';
server.listen(port, hostname, ()=> {
  console.log('server is up...')
})