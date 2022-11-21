const { Console } = require("console");
const fs = require("fs");
const path = require("path");

const output = fs.createWriteStream("./stdout.log");
const errorOutput = fs.createWriteStream("./stderr.log");
const logger = new Console(output, errorOutput);
logger.log("Alan"); // 写正常日志
// logger.error('error'); // 写错误日志

// 捕获同步任务异常
try {
  const fileContents = fs.readFileSync('./b.txt');
} catch (error) {
  logger.error(error);  // 写异常日志
}

// 捕获异步任务异常
fs.readFile('./b.txt', (err, data)=> {
  try {
    if(err) throw err;
    console.log('data--', data);
  } catch (error) {
    logger.error(error);
  }
})

// 读取文件路径：node ./log/index.js
// index.js
console.log(path.resolve('./')); // 执行命令所在目录：/Users/alan/project/nodejs-demo
console.log(__dirname); //执行文件所在目录： /Users/alan/project/nodejs-demo/log
console.log(__filename); // 执行文件路径： /Users/alan/project/nodejs-demo/log/index.js

// 监听服务是否退出
process.on('exit', (code)=> {
  console.log(`process will close, exit code: ${code}`);
})

// module exports require