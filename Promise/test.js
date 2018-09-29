const Promise = require('./Promise');

let p = new Promise(function(resolve, reject) {
  resolve('ok');
});

p.then(5, 6).then(function (data) {
  console.log(data);
  return data;
}, function (err) {
  console.log(err);
  // return '有返回值就走成功态'
}).then(function (data) {
  console.log('2 '+data);
}, function (err) {
  console.log(err);
});

let a = new Promise(function (resolve, reject) {
  reject(999);
});
a.then().then().then(function (data) {
  console.log('resolve:', data);  // 999
}, function (err) {
  console.log('error:', err);
});

let p1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
      resolve('北京');
  }, 1000);
});
let p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
      resolve('南京');
  }, 200);
});
let p3 = new Promise(function(resolve, reject) {
  resolve('东京');
});
Promise.all([p1, p2, p3]).then(function(data) {
   // all方法是所有的promise都成功后才会成功
   // 按照传入all里的顺序依次执行，p里面的定时器只是执行完成的时间而已，不影响all里输出顺序
   // 如：p这个需要等1秒后才会返回成功态，p2就需要等待1秒时间
   console.log(data);    // [ '北京', '南京', '东京' ]
});

Promise.race([p1, p2, p3]).then(function (data) {
  console.log(data);
});
