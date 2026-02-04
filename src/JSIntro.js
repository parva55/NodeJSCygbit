// we create a html file for dev side not for actual BE use
// we lean first JS basics that i know but still revision is required

// Topic :- Alert
// pop up alert message
alert("we are learning js");

// console this statement
console.log("hello We are here");
// console.log(window); // it s working in broswer but not in node "window" is broswer global object

const a = 20;
console.log("math", a + 20);



// Topic :- Array
// Array is containing all types of data values
var ArrDemo = [1, 2, "shah", 4, {}, true, [], null, function () {}];
// for array there are many methods like forEach, map, filter, find, indexOf, reduce, etc.

var arr = [1, 2, 3, 4];
// forEach example perform action on each item and return nothing
arr.forEach((item) => {
  console.log(item + " is the item");
});

// map example perform action on each item and return new array
const mapDemo = arr.map((item) => {
  return item * 2;
});
console.log("mapDemo", mapDemo);

// filter example perform action on each item and return new array but array size is same or less
const filterDemo = arr.filter((item) => {
  return item > 3 ? true : false;
});
console.log("filterDemo", filterDemo);

// find example perform action on each item and return first match item
const findDemo = arr.find((item) => {
  return item > 2 && true;
});
console.log("findDemo", findDemo);

// indexof example perform action on each item and return first match item index iit is find index in array
const indexOfDemo = arr.indexOf(2);
console.log("indexOfDemo", indexOfDemo);

// reduce example perform action on each item and return single value
const reduceDemo = arr.reduce((item) => {
  return item * 2;
});
console.log("reduceDemo", reduceDemo);

// sort example perform action on each item and return new array
const sortDemo = arr.sort((item) => {
  return item;
});
console.log("sortDemo", sortDemo);




// Topic :- Object
// Object is containing all types of data values in key value pair
// {} this is blank object
var objDemo = {
  name: "shah",
  age: 20,
  sureName: "",
};
console.log("objDemo", objDemo);

// access value using key
console.log("objDemo", objDemo.name);
console.log("objDemo", objDemo["name"]);

// also change value
objDemo.age = 25;

// now we freeze object it is not changeable the values
Object.freeze(objDemo);

// now console dir to show all properties of object
console.dir(objDemo);

// also we can use console.log to show all properties of object
console.log(objDemo);




// Topic :- Function
// also finding length of function it is num of params
function abcd(a, b, c, d) {}
console.log("fun length", abcd.length);

// function return value
function abcd(a, b, c, d) {
  return a + b + c + d;
}
console.log("fun return", abcd(1, 2, 3, 4));





// Topic :- Async
// line by line code chale to ene synchronous coding kevay
// je pn code async hoy ene side stack ma run kare ane bijo code run karo je sync hoy jyare sync code puro thai thai means main stack pachi check karo async code puro thayo ke nhi jo async code puro thayo hoy to side stack me main stack ma laine run kari do
// most of we use await in third party api call like fetch, axios, etc.

async function fetchData() {
  var res = await fetch("https://jsonplaceholder.typicode.com/posts");
  var data = await res.json();
  console.log("data", data[1]);
}
fetchData(); 





// async call without function and return json data
// with out async we can use await it is not run now
// var res = await fetch("https://randomuser.me/api/");
// var data = await res.json();
// console.log("data", data);

// Topic :- Promise
// Promise is object that represent future value
// Promise have three states
// 1. Pending
// 2. Fulfilled
// 3. Rejected
