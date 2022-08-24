// let vasanth = {
//   name: "vasanth",
//   age: 12,
// };

// let getData = function (place, char = "joyful") {
//   console.log(
//     `${this.name} is ${this.age} years old. I'm from ${place}. I'm ${char}`
//   );
// };

// let Rajesh = {
//   name: "Rajesh",
//   age: 21,
// };

// function borrowing -> call, apply
// getData.call(Rajesh, "Lucknow", "notorious");
// getData.call(vasanth, "Chennai");

// getData.apply(Rajesh, ["Lucknow", "notorious"]);

// let persons = [
//   {
//     obj: {
//       name: "Rajesh",
//       age: 21,
//     },
//     params: ["Lucknow", "notorious"],
//   },
//   {
//     obj: {
//       name: "vasanth",
//       age: 12,
//     },
//     params: ["chennai", "cool"],
//   },
// ];

// for (let data of persons) {
//   //   console.log(data.obj, data.params);
//   getData.apply(data.obj, data.params);
// }

// let vasanth = {
//   name: "vasanth",
//   age: 12,
// };

// let getData = function (place, char = "joyful") {
//   console.log(
//     `${this.name} is ${this.age} years old. I'm from ${place}. I'm ${char}`
//   );
// };

// let Rajesh = {
//   name: "Rajesh",
//   age: 21,
// };

// // bind
let RajeshData = getData.bind(Rajesh, "Lucknow");
let vasanthData = getData.bind(vasanth, "chennai", "cool");
// sameerData();
vasanthData();