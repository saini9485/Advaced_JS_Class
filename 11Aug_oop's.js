// classes -> Multi paradigm programming language
// OOPs -> Object Oriented Programming system
// functional programming
// class == function
// class is a syntactic sugar of function
// async await is a syntactic of promise

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.getAge = function () {
//     return this.age;
//   };

//   console.log(this);
//   //   return this; default return this
// }

// const Rajesh = new Person("Rajesh", 20);
// console.log("this return", Rajesh);
// const Govind = new Person("Govind", 6);
// const Amit = new Person("Amit", 2);

//
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   //   getter
//   get fullName() {
//     return this.name + " kumar";
//   }

//   set setFullName(name) {
//     this.name = name;
//   }

//   getAge() {
//     return this.age;
//   }
// }

// let Rajesh = new Person("Rajesh", 20);
// console.log(Rajesh.age,Rajesh.fullName);

// vasanth.setFullName = "Rajesh";
// console.log(vasanth.fullName);

Person();
class Person1 {
  constructor() {
    console.log("person in class");
  }
}

new Person1();

function Person() {
  console.log("person in fn ");
}

// function declarations are hoisted but classes are not hoisted