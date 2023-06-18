"use strict";
// 1======================
// 1======================
// 1======================
// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }
// 2======================
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   } 
//   return "Access denied, wrong password!";
//   // Change code above this line
// }
// 3======================
// function checkStorage(available, ordered) {
//   // Change code below this line
//   if (ordered === 0) {
//     return "Your order is empty!";
//   } if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//     return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }
// 4======================
// 5======================
// 6======================
// 7======================
// 8======================
// 9======================
// function getExtremeElements(array) {
  // Change code below this line

// return [array[0], array[array.length-1]]
  // Change code above this line
// }
// 10======================
// function splitMessage(message, delimiter) {
  // let words;
  // Change code below this line
// words = message.split(delimiter);
  // Change code above this line
  // return words;
// }
// 11======================
// function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
// const allPrice = message.split(" ").length * pricePerWord;
//  return allPrice;
  // Change code above this line
// }
// 12======================
// function makeStringFromArray(array, delimiter) {
  // let string;
  // Change code below this line
// string = array.join(delimiter);
  // Change code above this line
  // return string;
// }
// 13======================
// function slugify(title) {
  // Change code below this line
// const slug = title.toLowerCase().split(" ").join("-");
// console.log(slug);
  // Change code above this line
// }
// slugify('Arrays for begginers')
// 14======================
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(fruits.length-3, fruits.length);
// console.log(firstTwoEls)
// console.log(nonExtremeEls)
// console.log(lastThreeEls)
// 15======================
// 16======================
// 17======================
// 18======================
// function calculateTotal(number) {
  
//    let sum = 0;
//  for(let i = 1; i <= number; i += 1){
   
//   sum += i;
//  }
//  console.log(sum); 
//  }
//  calculateTotal(122)
// 19======================
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i <= fruits.length-1; i += 1) { 
//   const fruit = fruits[i];
//   console.log(fruit);
// }
// 20======================
// function calculateTotalPrice(order) {
//   let total = 0;
// for(let i = 0; i < order.length; i += 1){
//   total += order[i];
// }
//   return total;
// }
// 21======================
// function findLongestWord(string) {
  // Change code below this line
  // const stringArray = string.split(" ");
  // let longestWord = stringArray[0];
  // for(let i = 1; i < stringArray.length; i += 1){
  //   if(longestWord.length < stringArray[i].length ){
  //     longestWord = stringArray[i];
  //   }
  // }
  // console.log(longestWord);
  // Change code above this line
// }
// findLongestWord("Google do a roll")
// 22======================
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for(let i = min; i <= max; i += 1){
//   numbers.push(i);
// }
//   // Change code above this line
//   console.log(numbers);
// }
// createArrayOfNumbers(29, 34)
// 23======================
// function filterArray(numbers, value) {
//   // Change code below this line
//  const newArrayNumbers = [];
// for(let i = 0; i < numbers.length; i += 1){
//  if(numbers[i] > value){
//   newArrayNumbers.push(numbers[i]) ;
//  }
// }

// console.log(newArrayNumbers);
//  // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3)
// 24======================
// 25======================
// function getCommonElements(array1, array2) {
//   // Change code below this line
// const commonArr = [];
//   for(const element of array1){
//     if(array2.includes(element)){
//       commonArr.push(element);
//     }
//   }
// return commonArr;
//  // Change code above this line
// }
// 26======================
// 27======================
// 28======================
// 29======================
// function getEvenNumbers(start, end) {
//   // Change code below this line
//  const arr = [];
// for(let i = start; i <= end; i += 1){
//  if(i % 2 === 0){
//    arr.push(i);
//  }
// }
// return arr;
//    // Change code above this line
//  }
// 30======================
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// 31======================
// 32======================

