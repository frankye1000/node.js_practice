//var http = require("http");
//var url = require("url");
// 
//function start(route) {
//  function onRequest(request, response) {
//    var pathname = url.parse(request.url).pathname;
//    console.log("Request for " + pathname + " received.");
// 
//    route(pathname);
// 
//    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.write("Hello World");
//    response.end();
//  }
// 
//  http.createServer(onRequest).listen(7777);
//  console.log("Server has started.");
//}
// 
//exports.start = start;

////////////////////////////////////////////////////////////////
//獲取GET請求内容
//var http = require('http');
//var url = require('url');
//var util = require('util');
// 
//http.createServer(function(req, res){
//    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
//    res.end(util.inspect(url.parse(req.url, true)));
//}).listen(3000);
///////////////////////////////////////////////////////////////////
//獲取 URL 的參數
//var http = require('http');
//var url = require('url');
//var util = require('util');
// 
//http.createServer(function(req, res){
//    res.writeHead(200, {'Content-Type': 'text/plain'});
// 
//    // 解析 url 參數
//    var params = url.parse(req.url, true).query;
//    res.write("網站名：" + params.name);
//    res.write("\n");
//    res.write("網站 URL：" + params.url);
//    res.end();
// 
//}).listen(3000);
////////////////////////////////////////////////////////////////////
//post
//var http = require('http');
//var querystring = require('querystring');
// 
//var postHTML = 
//  '<html><head><meta charset="utf-8"><title>菜鳥教程 Node.js 實例</title></head>' +
//  '<body>' +
//  '<form method="post">' +
//  '網站名： <input name="name"><br>' +
//  '網站 URL： <input name="url"><br>' +
//  '<input type="submit">' +
//  '</form>' +
//  '</body></html>';
// 
//http.createServer(function (req, res) {
//  var body = "";
//  req.on('data', function (chunk) {
//    body += chunk;
//  });
//  req.on('end', function () {
//    // 解析參數
//    body = querystring.parse(body);
//    // 設置響應頭部信息及編碼
//    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
// 
//    if(body.name && body.url) { // 輸出提交的數據
//        res.write("網站名：" + body.name);
//        res.write("<br>");
//        res.write("網站 URL：" + body.url);
//    } else {  // 輸出表單
//        res.write(postHTML);
//    }
//    res.end();
//  });
//}).listen(3000);
///////////////////////////////////////////////////////////////////////
//使用 Node 創建 Web 服務器
var http = require('http');
var fs = require('fs');
var url = require('url');
 
 
// 創建服務器
//http.createServer( function (request, response) {  
//   // 解析請求，包括文件名
//   var pathname = url.parse(request.url).pathname;
//   
//   // 輸出請求的文件名
//   console.log("Request for " + pathname + " received.");
//   
//   // 從文件系統中讀取請求的文件内容
//   fs.readFile(pathname.substr(1), function (err, data) {
//      if (err) {
//         console.log(err);
//         // HTTP 狀態碼: 404 : NOT FOUND
//         // Content Type: text/plain
//         response.writeHead(404, {'Content-Type': 'text/html'});
//      }else{             
//         // HTTP 狀態碼: 200 : OK
//         // Content Type: text/plain
//         response.writeHead(200, {'Content-Type': 'text/html'});    
//         
//         // 響應文件内容
//         response.write(data.toString());        
//      }
//      //  發送響應數據
//      response.end();
//   });   
//}).listen(7777);
// 
//// 控制台會輸出以下信息
//console.log('Server running at http://127.0.0.1:7777/');

///////////////////////////////////////////////////////////////////////
//GET
//var express = require('express');
//var app = express();
// 
//app.use(express.static('public'));
// 
//app.get('/index.html', function (req, res) {
//   res.sendFile( __dirname + "/" + "index.html" );
//})
// 
//app.get('/process_get', function (req, res) {
// 
//   // 輸出 JSON 格式
//   var response = {
//       "first_name":req.query.first_name,
//       "last_name":req.query.last_name
//   };
//   console.log(response);
//   res.end(JSON.stringify(response));
//})
// 
//var server = app.listen(8081, function () {
// 
//  var host = server.address().address
//  var port = server.address().port
// 
//  console.log("應用實例，訪問地址為 http://%s:%s", host, port)
// 
//})
/////////////////////////////////////////////////////////////////////////
//POST
//var express = require('express');
//var app = express();
//var bodyParser = require('body-parser');
// 
//// 創建 application/x-www-form-urlencoded 编碼解析
//var urlencodedParser = bodyParser.urlencoded({ extended: false })
// 
//app.use(express.static('public'));
// 
//app.get('/index.html', function (req, res) {
//   res.sendFile( __dirname + "/" + "index.html" );
//})
// 
//app.post('/process_post', urlencodedParser, function (req, res) {
// 
//   // 輸出 JSON 格式
//   var response = {
//       "first_name":req.body.first_name,
//       "last_name":req.body.last_name
//   };
//   console.log(response);
//   res.end(JSON.stringify(response));
//})
// 
//var server = app.listen(8081, function () {
// 
//  var host = server.address().address
//  var port = server.address().port
// 
//  console.log("應用實例，訪問地址為 http://%s:%s", host, port)
// 
//})

////////////////////////////////////////////////////////////////////////
//文件上傳
var express = require('express');
var app = express();
var fs = require("fs");
 
var bodyParser = require('body-parser');
var multer  = require('multer');
 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));
 
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
 
app.post('/file_upload', function (req, res) {
 
   console.log(req.files[0]);  // 上傳的文件信息
 
   var des_file = __dirname + "/" + req.files[0].originalname;
   fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully', 
                   filename:req.files[0].originalname
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("應用實例，訪問地址為 http://%s:%s", host, port)
 
})

