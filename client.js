//使用 Node 創建 Web 客户端
var http = require('http');
 
// 用于請求的選項
var options = {
   host: 'localhost',
   port: '7777',
   path: '/index.html'  
};
 
// 處理響應的回調函數
var callback = function(response){
   // 不斷更新數據
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // 數據接收完成
      console.log(body);
   });
}
// 向服務端發送請求
var req = http.request(options, callback);
req.end();