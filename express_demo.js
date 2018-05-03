// Request 對象 - 請求對象表示HTTP請求，包含請求查詢字符串，參數，內容，HTTP頭部等屬性
// Response對象 - 響應對象表示HTTP響應，即在接收到請求時向客戶端發送的HTTP響應數據
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   res.send('Hello World');
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("應用實例，訪問地址為 http://%s:%s", host, port)
 
})