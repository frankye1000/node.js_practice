//鍵式流
var fs = require("fs");
var zlib = require('zlib');

// 壓縮 input.txt 文件為 input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("文件壓縮完成。");