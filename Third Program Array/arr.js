// let family = [
//   ["Meena","mother","55"],
//   ["Santosh","father","60"],
//   ["Mukesh","elder son","34"],
//   ["Rakesh","myself","33"],
//   ["Manisha","sister1","27"],
//   ["Ankit","brother","24"],
//   ["Anisha","sister2","20"],
//   ["Sanjeev","brother","18"]
// ];
// console.log(family[5][0]);
// console.log(family[2][2]);

// How to excess elements of an array?
// let booklist = ["math","physics","chemistry","social science","history"]
// for(let i = 0; i<booklist.length; i++) {
//     console.log(`Element ${i} is ${booklist[i]}`);
// }

// let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let booklist = ["math", "physics", "chemistry", "social science", "history"];

// booklist.forEach((Element) => {
//   console.log(Element);
// });
// digits.forEach((value) => {
//   let sum = value*10;

//   console.log(sum);
// });

// let num = prompt("Enter a number");
// number = Number(num);

// displayTable(number);

// function displayTable(number) {
//   for(i = 1; i<=10; i++){
//     var sumOfTable = number*i;
//     console.log(`${number} x ${i} = ${number*i}`)
//   }}

// Calculator functions

// **Addition Function
// function add(x,y) {
//   console.log(x+y);
// }
// add(2,4);
// add(4,5);
// // add(38678,85878);
// // add(88454,884);
// function subtract(x,y) {
//   console.log(x-y);
// }
// // subtract(34,24);
// // subtract(345,345);
// // subtract(386873,7656473)
// function multiply (x,y) {
//   console.log(x*y);
// }
// // multiply(45857576,575);
// function divide (x,y) {
//   console.log(x/y);
// }
// // divide(345,76464647575774)
// function remainder (x,y) {
//   console.log(x%y);
// }
// // remainder(34,17);
// function exponent(x,y){
//   console.log(x**y);

// exponent(2,45
//How to factorize a number.
// function factors(x) {
//   for(i = 1; i<=x; i++){

//     if(x%i == 0){
//       let factorsArr = [];
//       factorsArr.concat([i]);
//       console.log(factorsArr);
//     }
//   }
// }
// factors(12)

// Finding sum of many numbers
// function add() {
//   if(arguments.length == 0){
//     console.log("No any numbers passed.")
//   }else {
//     let sum = 0;
//     for(i=0;i<arguments.length;i++)
//     sum = sum + arguments[i];
//   console.log(sum);
//   }
// }
// add(9,3,4,5,6,2,34,56,45,6,86,789,234,456);

// function mul() {
//   if(arguments.length == 0){
//     console.log("No any numbers passed.");
//   }else {
//     let product = 1;
//     for(i=0;i<arguments.length;i++)
//     product = product * arguments[i];
//   console.log(product);
//   }
// }
// mul(3,4,45,57,38,23,45,123,234,345,456);

// A new function to find the factors inside an array
// function factors(n) {
//   for (i = 0; i <= n; i++) {
//     if (n % i == 0) {
//      console.log(i);
//     }
    
//   }
  
// }
// let arr = factors(45)
// console.log(arr)

