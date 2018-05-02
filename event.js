//EventEmitter類

//var EventEmitter = require('events').EventEmitter;
//var event = new EventEmitter();
//event.on("some_event", function(){
//    console.log('some_event 事件觸發');
//});
//setTimeout(function(){
//    event.emit('some_event');
//},1000)

////////////////////////////////
//例子
//var events = require('events');
//var eventEmitter = new events.EventEmitter();
//
//var listener1 = function listener1(){
//    console.log("監聽器 listener1執行");
//}
//
//var listener2 = function listener2(){
//    console.log("監聽器 listener2執行");
//}
//
//eventEmitter.addListener('connection', listener1);
//
//eventEmitter.on('connection', listener2);
//
//var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
//console.log(eventListeners + " 個監聽器連接事件。");
//
//// 處理 connection 事件 
//eventEmitter.emit('connection');
//
//// 移除監綁定的 listener1 函数
//eventEmitter.removeListener('connection', listener1);
//console.log("listener1 不再受監聽。");
//
//// 觸發連接事件
//eventEmitter.emit('connection');
//
//eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
//console.log(eventListeners + " 個監聽器連接事件。");
//
//console.log("程序執行完畢。");

//////////////////////////////////////
//error事件
var events = require('events');
var emmiter = new events.EventEmitter();
emmiter.emit('error')








