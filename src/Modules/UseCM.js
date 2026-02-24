// using custom module in other file using require and module.exports

const { a, b } = require("./CustomModule.js");
console.log("in app", a, b);

const sum = a.add(10, 20);
const sub = a.subtract(10, 20);
const mul = a.multiply(10, 20);
const div = a.divide(10, 20);

console.log("in app sum", sum);
console.log("in app sub", sub);
console.log("in app mul", mul);
console.log("in app div", div);

const avg = b.average(10, 20);
const per = b.percent(10, 20);
console.log("in app avg per", avg, per);
