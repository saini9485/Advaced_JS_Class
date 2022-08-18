// let sum = 0.1+0.2;
// if(sum==0.3){
//   console("True")
// }else {
//   console.log("false")
// }//false=> because all floating value when we compare it will return false 


// let sum = 0.1+0.5;
// if(sum==0.6){
//   console("True")
// }else {
//   console.log("false")
// }
// why here is coming error 

// (function immediateA (a){
//   (function immediateA (b){
//     console.log(a)
//   }) (1)
// }) (0) //0 

// function multiply (num1,num2){
//   console.log(num1*num2)
//   return num1*num2
// }
// const triple = multiply(3)  // NaN 
// triple(5) // error

// we want to achive 15 to this code how can achive 
// function multiply (num1,num2){

// }
// const triple = multiply (5)
// triple (3)

// function multiply (num1,num2){

// function multiply (num1, num2 ){
//   return function triple (num3){
//     console.log(num3*num1)
//   }
//   }
//   const triple = multiply (5)
//   triple (3) //15

//if we want to achieve  200 and 15 with the help of this code 
function multiply (num1,num2){
if(num2==undefined){
  return function triple(num3){
    console.log(num3*num1)
  }
}else  {
console.log(num1*num2)
}
}
multiply (10,20)
const triple = multiply (3) //num1 = 3 num2 = undefine 
triple (5)







//we wanted to print 1 to 5 in  a interval of 1 second 

// for (let i=1;i<=5;i++)
// setTimeout (()=>{   
// console.log(i)
// },i*1000) //1,2,3,4,5 

// for (let i=1;i<=5;i++){
// setTimeout (()=>{   
// console.log(i)
// },i*1000)
// }//1,2,3,4,5
//function multiply (num1,num2){
// }
// const triple = multiply(3)
// triple(5)
// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();
