//var events = require('events');
//var eventEmitter = new events.EventEmitter();
//var connectHandler = function connected() {
//   console.log('連接成功。');
//   
//   eventEmitter.emit('data_received');
//}
//
//eventEmitter.on('connection', connectHandler);
// 
//eventEmitter.on('data_received', function(){
//   console.log('數據接收成功。');
//});
// 
//eventEmitter.emit('connection');
//
//console.log("程序執行完畢。");

///////////////////

//var fs = require("fs");
//
//fs.readFile('input.txt', function(err,data){
//    if (err){
//        console.log(err.stack);
//        return;
//    }
//    console.log(data.toString());
//});
//console.log("程序執行完畢")

//////////////////////////////////////////
//Buffer 與字符編碼
//const buf = Buffer.from('runoob', 'ascii');
//
//console.log(buf.toString('hex'));
//
//console.log(buf.toString('base64'));

/////////////////////////////////////////

//創建Buffer類
//const buf1 = Buffer.alloc(10);
//const buf2 = Buffer.alloc(10,1)
////創建一個長度為10、且未初始化的Buffer。
////這個方法比調用Buffer.alloc()更快，
////但返回的Buffer實例可能包含舊數據，
////因此需要使用fill()或write()重寫
//const buf3 = Buffer.allocUnsafe(10);
//const buf4 = Buffer.from([1, 2, 3]);
//const buf5 = Buffer.from('tést');
//const buf6 = Buffer.from('tést', 'latin1');
///////////////////////////////////////
//寫入緩衝區
//buf = Buffer.alloc(256);
//len = buf.write("www.runoob.com");
//
//console.log("寫入字節數 : "+  len);
/////////////////////////////////////
//從緩衝區讀取數據
//buf = Buffer.alloc(26);
//for (var i = 0 ; i < 26 ; i++) {
//  buf[i] = i + 97;
//}
//
//console.log( buf.toString('ascii'));       // 輸出: abcdefghijklmnopqrstuvwxyz
//console.log( buf.toString('ascii',0,5));   // 輸出: abcde
//console.log( buf.toString('utf8',0,5));    // 輸出: abcde
//console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 編碼, 輸出: abcde
/////////////////////////////////////
//將Buffer轉換為JSON對象
//const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
//const json = JSON.stringify(buf);
//
//console.log(json);
//
//const copy = JSON.parse(json, (key, value) => {
//  return value && value.type === 'Buffer' ?
//    Buffer.from(value.data) : value;
//});
//
//
//console.log(copy);
/////////////////////////////////////
//緩衝區合併
//var buffer1 = Buffer.from(('菜鳥教程'));
//var buffer2 = Buffer.from(('www.runoob.com'));
//var buffer3 = Buffer.concat([buffer1, buffer2]);
//console.log(buffer3.toString());
////////////////////////////////////
//緩衝區比較
//var buffer1 = Buffer.from('ABCD');
//var buffer2 = Buffer.from('ABCD');
//var result = buffer1.compare(buffer2);
//
//if(result < 0) {
//   console.log(buffer1 + " 在 " + buffer2 + "之前");
//}else if(result == 0){
//   console.log(buffer1 + " 與 " + buffer2 + "相同");
//}else {
//   console.log(buffer1 + " 在 " + buffer2 + "之後");
//}
//console.log(result)
//////////////////////////////////////
//從流中讀取數據
//var fs = require("fs");
//var data = '';
//
//var readerStream = fs.createReadStream('input.txt')
//
//readerStream.setEncoding('UTF8');
//// 處理流事件 --> data, end, and error
//readerStream.on('data', function(chunk){
//    data+=chunk;
//});
//readerStream.on('end',function(){
//   console.log(data);
//});
//readerStream.on('error', function(err){
//   console.log(err.stack);
//});
//console.log("程序執行完畢");
//////////////////////////////////////////
//寫入流
//var fs = require("fs");
//var data = 'frankye github ： https://github.com/frankye1000';
//
//// 創建一个可以寫入的流，寫入到文件 output.txt 中
//var writerStream = fs.createWriteStream('output.txt');
//
//// 使用 utf8 編碼寫入數據
//writerStream.write(data,'UTF8');
//
//// 標記文件末尾
//writerStream.end();
//
//// 處理流事件 --> data, end, and error
//writerStream.on('finish', function() {
//    console.log("寫入完成。");
//});
//
//writerStream.on('error', function(err){
//   console.log(err.stack);
//});
//
//console.log("程序執行完畢");
/////////////////////////////////////////////////
//管道流
//var fs = require("fs");
//
//// 創建一個可讀流
//var readerStream = fs.createReadStream('input.txt');
//
//// 創建一個可寫流
//var writerStream = fs.createWriteStream('output.txt');
//
//// 管道讀寫操作
//// 讀取 input.txt 文件内容，並將内容寫入到 output.txt 文件中
//readerStream.pipe(writerStream);
//
//console.log("程序執行完畢");
///////////////////////////////////////////////////////
//創建模塊
//var hello = require('./hello')
//hello.world();

//var Hello = require('./hello');
//hello = new Hello();
//hello.setName('frankye1000')
//hello.sayHello();

///////////////////////////////////////////////////////
//Node.js 函數
//function say(word) {
//  console.log(word);
//}
//
//function execute(someFunction, value) {
//  someFunction(value);
//}
//
//execute(say, "Hello");
//匿名函數
//function execute(someFunction, value) {
//  someFunction(value);
//}
//
//execute(function(word){ console.log(word) }, "Hello 匿名函數");

////////////////////////////////////////////////////////////
//函數傳遞是如何讓HTTP服務器工作的
//var http = require("http");
//
//function onRequest(request, response) {
//  response.writeHead(200, {"Content-Type": "text/plain"});
//  response.write("Hello World");
//  response.end();
//}
//
//http.createServer(onRequest).listen(7777);

/////////////////////////////////////////////////////////////
//全局對象與全局變量
//__filename
//console.log( __filename );
////__dirname
//console.log( __dirname );
////setTimeout(cb, ms)
//function printHello(){
//   console.log( "Hello, World!");
//}
//// 兩秒後執行以上函數
//setTimeout(printHello, 2000);
////setInterval(cb, ms)
//function printHello(){
//   console.log( "Hello, World!");
//}
//// 每兩秒重複執行以上函數
//setInterval(printHello, 2000);
////console
//console.log('Hello world'); 
//console.log('byvoid%diovyb'); 
//console.log('byvoid%diovyb', 1991); 
///////////////////////////////////////////////////////////////////
//process
//process.on('exit', function(code) {
//
//  // 以下代碼永遠不會執行
//  setTimeout(function() {console.log("該代碼不會執行");}, 0);
//  
//  console.log('退出碼為:', code);
//});
//console.log("程序執行結束");
/////////////////////////////////////////////////////////////////
//util.inherits
var util = require('util'); 
function Base() { 
    this.name = 'base'; 
    this.base = 1991; 
    this.sayHello = function() { 
    console.log('Hello ' + this.name); 
    }; 
} 
Base.prototype.showName = function() { 
    console.log(this.name);
}; 
function Sub() { 
    this.name = 'sub'; 
} 
util.inherits(Sub, Base); 
var objBase = new Base(); 
objBase.showName(); 
objBase.sayHello(); 
console.log(objBase); 
var objSub = new Sub(); 
objSub.showName(); 
//objSub.sayHello(); 
console.log(objSub); 
/////////////////////////////////////////////////////////////////












