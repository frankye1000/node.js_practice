var express = require('express');
var app = express();
 
//  主頁輸出 "Hello World"
app.get('/', function (req, res) {
   console.log("主頁 GET 請求");
   res.send('Hello GET');
})
 
 
//  POST 請求
app.post('/', function (req, res) {
   console.log("主頁 POST 請求");
   res.send('Hello POST');
})
 
//  /del_user 頁面響應
app.get('/del_user', function (req, res) {
   console.log("/del_user 響應 DELETE 請求");
   res.send('删除頁面');
})
 
//  /list_user 頁面 GET 请求
app.get('/list_user', function (req, res) {
   console.log("/list_user GET 请求");
   res.send('用户列表頁面');
})
 
// 對頁面 abcd, abxcd, ab123cd, 等響應 GET 請求
app.get('/ab*cd', function(req, res) {   
   console.log("/ab*cd GET 请求");
   res.send('正則匹配');
})
 
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("應用實例，訪問地址為 http://%s:%s", host, port)
 
})