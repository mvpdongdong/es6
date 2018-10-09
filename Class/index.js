// require('babel-register');
const Point = require('./Point');
const point = new Point(1, 2);
const log = console.log;

log(typeof Point);
log(Point.prototype.constructor === Point);
log(Object.keys(Point.prototype));
log(Object.getOwnPropertyNames(Point.prototype));