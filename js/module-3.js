"use strict";
// 1/41 =============================================
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// 2/41 =============================================
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//   name: "Henry",
//   phone: "982-126-1588",
//   email: "henry.carter@aptmail.com",
// },
// };
// 3/41 =============================================
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line
// 4/41 =============================================
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Change code above this line
// 5/41 =============================================
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line
// 6/41 =============================================
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted")
// 7/41 =============================================
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {country: "Jamaica",
// city: "Kingston"};
// 8/41 =============================================
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };
// 9/41 =============================================
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam",

//   // Change code above this line
// };
// 10/41 =============================================
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for(key in apartment){
//   keys.push(key);
//   values.push(apartment[key]);
// }
// 11/41 =============================================
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;
// for (const key in apartment) {
//   // Change code below this line
// if(apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
// };
//   // Change code above this line
// }
// 12/41 =============================================
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for(key in object){
//   if(object.hasOwnProperty(key)){
//     propCount += 1;
//   }
// }
//   // Change code above this line
//   return propCount;
// }
// 13/41 =============================================
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for(const key of keys){
//   values.push(apartment[key]);
// }
// 14/41 =============================================
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
// propCount = Object.keys(object).length
//   console.log(propCount) ;
//   // Change code above this line
// }
// const object = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// countProps(object)
// 15/41 =============================================
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// 16/41 =============================================
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// const values = Object.values(salaries); 
//   for(const value of values){
//     totalSalary += value;
//   }
//   // Change code above this line
//   console.log(totalSalary);
// }
// 17/41 =============================================
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for(const color of colors){
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors)
//   console.log(rgbColors)
// 18/41 =============================================
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//   // Change code below this line
// for(const product of products){
//   if(product.name === productName){
//     return product.price;
//   }
// }
// return null;
//   // Change code above this line
// }
// 19/41 =============================================
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   // Change code below this line
//   const array = [];
// for(const product of products){
// if(Object.keys(product).includes(propName)){
//   array.push(product[propName]);
//   console.log(product[propName])
// };
// };
// console.log(array);
//   // Change code above this line
// }
// getAllPropValues("name")

// 20/41 =============================================
// Напиши функцию calculateTotalPrice(productName) которая принимает 
// один параметр productName - название товара. Функция должна вернуть 
// общую стоимость (цена * количество) товара с таким именем из массива products.
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
// for(const product of products){
//   // console.log(product[productName])
//   if(productName === product.name){
//     console.log(product.price * product.quantity); 
//   }
// }
  // Пиши код выше этой строки
// };
// calculateTotalPrice("Radar");
// 21/41 =============================================
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday, today, tomorrow
// } = highTemperatures
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// 22/41 =============================================
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//    yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// 23/41 =============================================
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//  yesterday: highYesterday,
//  today: highToday,
//  tomorrow: highTomorrow,
//  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;
// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// 24/41 =============================================
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors)
// console.log(rgbColors)
// 25/41 =============================================
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},       
//    tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}       
// } = forecast;
// console.log(lowToday)
// console.log(highToday)
// console.log(lowTomorrow)
// console.log(highTomorrow)
// 26/41 =============================================
// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;
//   const {today: {low: todayLow, high: todayHigh},
//         tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast;
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// 27/41 =============================================
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// 28/41 =============================================
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// 29/41 =============================================
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};
// 30/41 =============================================
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const newData = {
//     category,
//     priority,
//     ...data,
//     completed,
//   }
// return newData;
//   // Change code above this line
// }
// 31/41 =============================================
// function add(...args) {
//   let sum = 0;
//   for(const arg of args){
//     sum += arg;
//   }
//   // Change code above this line
//   console.log(sum);
// }
// add(74, 11, 62, 46, 12, 36)
// 32/41 =============================================
// Change code below this line
// function addOverNum(...args) {
//   let total = 0;
//   for(i = 0; i < args.length; i +=1){
//     if(args[i] > args[0]){
//       total += args[i];
//     }
//   }
//   return total;
//   // Change code above this line
// }
// 33/41 =============================================
// // Change code below this line
// function findMatches(a, ...args) {
//   const matches = []; // Don't change this line
//   for(const arg of args){
//     if(a.includes(arg)){
//       matches.push(arg);
//     }
//   }
//   // Change code above this line
//   console.log(matches);
//   console.log(args);
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
// 34/41 =============================================
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName){
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName){
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };
// 35/41 =============================================
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName){
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName){
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };
// 36/41 =============================================
// 37/41 =============================================
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
// getPotions(potions){
//   console.log(this.potions);
// },
//   // Change code above this line
// };
// atTheOldToad.getPotions()
// 37/41 =============================================
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
// getPotions(potions){
//   return this.potions;
// },
//   // Change code above this line
// };
// 38/41 =============================================
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
// this.potions.push(potionName);
//   // Change code above this line
//   },
// };
// 39/41 =============================================
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
// this.potions.splice(this.potions.indexOf(potionName), 1);
//     // Change code above this line
//   },
// };
// 40/41 =============================================
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
// this.potions.splice(this.potions.indexOf(oldName), 1, newName);
//     // Change code above this line
//   },
// };
// 41/41 =============================================
// const atTheOldToad = {
//   potions: [
  //   { name: "Speed potion", price: 460 },
  //   { name: "Dragon breath", price: 780 },
  //   { name: "Stone skin", price: 520 },
  // ],
  // // Change code below this line
  // getPotions() {
  //   // return this.potions;
  //   console.log(this.potions);
  // },
  // addPotion(newPotion) {
  //   for(const potion of this.potions){
  //     if(potion.name === newPotion.name){
  //       console.log(`Error! Potion ${newPotion.name} is already in your inventory!`)
  //       return;
  //     }
  //   }
  //   this.potions.push(newPotion);
  // },
  // removePotion(potionName) {
  //   for(const potion of this.potions){
//       if(potion.name === potionName.name){
//         this.potions.splice(this.potions.indexOf(potion), 1);
//       }  
//     };
//   },
//   updatePotionName(oldName, newName) {
//     for(const potion of this.potions){
//       if(potion.name === oldName){
//         potion.name = newName;
//       };
//     };
//     console.log(this.potions);
//   },
//   // Change code above this line
// };
// atTheOldToad.getPotions();
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');