//var fs = require("fs");
//
//console.log("準備打開文件！");
//fs.stat('input.txt', function (err, stats) {
//   if (err) {
//       return console.error(err);
//   }
//   console.log(stats);
//   console.log("讀取文件信息成功！");
//   
//   // 檢測文件類型
//   console.log("是否為文件(isFile) ? " + stats.isFile());
//   console.log("是否為目錄(isDirectory) ? " + stats.isDirectory());    
//});

//var fs = require("fs");
//
//console.log("準備寫入文件");
//fs.writeFile('input.txt', '我是通過fs.writeFile 寫入文件的内容',  function(err) {
//   if (err) {
//       return console.error(err);
//   }
//   console.log("數據寫入成功！");
//   console.log("--------我是分割線-------------")
//   console.log("讀取寫入的數據！");
//   fs.readFile('input.txt', function (err, data) {
//      if (err) {
//         return console.error(err);
//      }
//      console.log("異步讀取文件數據: " + data.toString());
//   });
//});

var fs = require("fs");
var buf = new Buffer(1024);

console.log("准備打開已存在的文件！");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("文件打開成功！");
   console.log("准備讀取文件：");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + "  字節被讀取");
      
      // 僅輸出讀取的字節
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }
      fs.close(fd, function(err){
         if (err){
            console.log(err);
         } 
         console.log("文件關閉成功");
      });
   });
});