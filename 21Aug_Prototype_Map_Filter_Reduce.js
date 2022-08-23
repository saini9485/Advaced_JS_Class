// const grandParent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// const btn = document.querySelector(".btn");

// function printGrandParent(event) {
//   console.log("grand parent bubbling", event.target);
// }

// function printOnHover() {
//   console.log("hovering");
// }

// grandParent.addEventListener("click", printGrandParent);

// function removeGrandParent() {
//   setTimeout(() => {
//     console.log("removing grandparent");
//     grandParent.removeEventListener("click", printGrandParent);
//   }, 2000);
// }

// btn.addEventListener("click", removeGrandParent);

// parent.addEventListener("click", (event) => {
//   console.log("parent bubbling");
// });

// child.addEventListener("click", (event) => {
//   console.log("child bubbling");
// });

// const newDiv = document.createElement("div");
// newDiv.style.width = "10rem";
// newDiv.style.height = "10rem";
// newDiv.style.backgroundColor = "red";
// const para = document.createElement("p");
// para.innerText = "vasanthkumar ";
// newDiv.append(para);
// document.body.append(newDiv);

// child.append(para);

// function test() {
//   this.style.backgroundColor = "red";
//   // console.log(document.querySelector(".btn"));
// }

// // test();
// // grandParent.addEventListener("click", test);
// btn.addEventListener("click", test);
// child.addEventListener("click", test);

// console.log(eval(10 * 5 + 5 / 2));

// console.log(8 + 2);

// console.log("hello".indexOf("i", 3));

// String.prototype.vasanthIndex = function (target, starting = 0) {
//   console.log(this);
//   for (let index = starting; index < this.length; index++) {
//     if (this[index] === target) {
//       return index;
//     }
//   }
//   return -1;
// };

// console.log("hello".vasanthIndex("i"));

// Array.prototype.vasanthIncludes = function () {
//   console.log(this);
// };

// [1, 2, 4, 5].vasanthIncludes();
// ["dabda", "dada"].vasanthIncludes();

//
// protypical inheritance

// let nums = [1, 2, 3, 4, 5];
// prototype -> my methods
// __proto__ -> my parent methods
// class Object {
//   hasData() {}
// }

// class Array extends Object {
//   every() {}

//   filter() {}
// }

// class Function extends Object {

// }

// function log() {
//   console.log("logging");
// }

// let person = {
//   name: "vasanth",
//   age: 30,
//   getInfo: function () {
//     console.log(`${this.name} is ${this.age} years old `);
//   },
// };

// let person2 = {
//   name: "Rajni",
// };

// // never ever do this in your code
// person2.__proto__ = person;

//

// polyfill
// Array.prototype.vasanth = function () {
//   console.log("vasanth method");
// };
// [].vasanth();

// Function.prototype.logger = function () {
//   console.log("logging");
// };

// function add() {}

// polyfills
// Map, filter and reduce

// map polyfill
// Array.prototype.myMap = function (callbackfn) {
//   // console.log("this -->", this);
//   let myarr = this;
//   let resultArr = [];
//   for (let i = 0; i < myarr.length; i++) {
//     let data = callbackfn(myarr[i], i, myarr);
//     resultArr.push(data);
//   }

//   return resultArr;
// };

// let nums = [1, 2, 3, 4];
// let result = nums.myMap(function (num) {
//   console.log(num);
//   return num * 2;
// });

// console.log(result);
// //  nums.map(() => {})
// // ["a", "b", "c", "d"].myMap();

// filter
// let filteredNums = [1, 2, 3, 4].filter((num) => num > 2);
// console.log(filteredNums);

// Array.prototype.myFilter = function (callbackfn) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callbackfn(this[i])) {
//       result.push(this[i]);
//     }
//   }
//   return result;
// };

// let filteredNums = [1, 2, 3, 4].myFilter((num) => num > 2);
// console.log(filteredNums);

// reduce
// let reducedNum = [1, 2, 3, 4].reduce((acc, current, i, arr) => {
//   console.log(acc, current, i, arr);
//   return acc + current;
// });
// console.log(reducedNum);

// let reducedString = ["sachin", "tendulkar", "break", "india"].reduce(
//   (acc, current) => {
//     console.log(acc, current);
//     return acc + " " + current;
//   }
// );

// console.log(reducedString);

Array.prototype.myReduce = function (callbackFn, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callbackFn(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

let reducedNum = [1, 2, 3, 4].myReduce((acc, current, i, arr) => {
  // console.log(acc, current, i, arr);
  return acc + current;
}, 10);

console.log(reducedNum);