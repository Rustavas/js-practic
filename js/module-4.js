"use strict";
// 1 =============================
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line
// const result = makePizza();
// const pointer = makePizza;
// 2 =============================
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   // return callback();
//   console.log(callback(pizzaName))
// }
// makeMessage('Royal Grand', makePizza)
// makeMessage('Ultracheese', deliverPizza)
// 3 =============================
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }
// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line
// makePizza("Ultracheese", function eatPizza(pizzaName){
//   console.log(`Eating pizza ${pizzaName}`)
// });
// 4 =============================
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)){
//         return onSuccess(pizzaName);
//     } else {return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)}
//   },
// };
// // Change code above this line
// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }
// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);
// 5 =============================
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
// orderedItems.forEach(function (item){
//   totalPrice += item;
// });
//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   // Change code above this line
//   console.log(totalPrice);
// }
// calculateTotalPrice([12, 85, 37, 4])
// 6 =============================
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
// numbers.forEach(function (number){
//   if(number > value){
//     filteredNumbers. push(number); 
//   };
// });
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // Change code above this line
//   return filteredNumbers;
// }
// 7 =============================
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach(function (number){
//     if(secondArray.includes(number)){
//       commonElements.push(number);
//     };
//   });
//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }
//   return commonElements;
//   // Change code above this line
// }
// 8 =============================
// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// }
// 9 =============================
// // // Change code below this line
// // const calculateTotalPrice = (quantity, pricePerItem) => {
// //   return quantity * pricePerItem;
// // };
// // Change code above this line
// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => 
//    quantity * pricePerItem;
// // Change code above this line
// 10 =============================
// // Change code below this line
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Change code above this line
// 11 =============================
// // Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// 12 =============================
// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];
//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   // Change code above this line
//   return commonElements;
// }
// 13 =============================
// const changeEven = (numbers, value) => {
//   // Change code below this line
//   const newNumbers = [];
//   numbers.forEach(number => {
//     if(number % 2 === 0){
//       newNumbers.push(number + value);
//     } else {
//       newNumbers.push(number);
//     };
//   });
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }
//   console.log(newNumbers);
//   // Change code above this line
// };
// changeEven([1, 2, 3, 4, 5], 10)
// 14 =============================
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths =  planets.map(planet => planet.length);
// console.log(planetsLengths);
// 15 =============================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line
// const titles = books.map(({title}) => title);
// 16 =============================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line
// const genres = books.flatMap(({genres}) => genres);
// 17 =============================
// // Change code below this line
// const getUserNames = users => {
//   return users.map(({name}) => name);
// };
// // Change code above this line
// 18 =============================
// // Change code below this line
// const getUserEmails = users => {
//   return users.map(({email}) => email);
// };
// // Change code above this line
// 19 =============================
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// 20 =============================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(({genres}) => genres);
// const uniqueGenres = allGenres.filter((el, index, allGenres) => allGenres.indexOf(el) === index);
// 21 =============================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line
// const topRatedBooks = books.filter(({rating}) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({author}) => author === AUTHOR);
// 22 =============================
// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(({eyeColor}) => eyeColor === color);
//  };
//  // Change code above this line
// 23 =============================
// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(({age}) => age > minAge && age < maxAge);
//  };
//  // Change code above this line
// 24 =============================
// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(({friends}) => friends.includes(friendName));
// };
// // Change code above this line
// 25 =============================
// // Change code below this line
// const getFriends = (users) => {
//   return users.flatMap(({friends}) => friends).filter((el, index, array) => array.indexOf(el) === index);
// };
// // Change code above this line
// 26 =============================
// // Change code below this line
// const getActiveUsers = (users) => {
//   return users.filter(({isActive}) => isActive === true)
// };
// // Change code above this line
// 27 =============================
// // Change code below this line
// const getInactiveUsers = (users) => {
//   return users.filter(({isActive}) => isActive === false);
// };
// // Change code above this line
// 28 =============================
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(({title}) => title === BOOK_TITLE);
// const bookByAuthor = books.find(({author}) => author === AUTHOR);
// 29 =============================
// // Change code below this line
// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };
// // Change code above this line
// 30 =============================
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line
// const eachElementInFirstIsEven = firstArray.every(el => el % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(el => el % 2 !== 0);
// const eachElementInSecondIsEven = secondArray.every(el => el % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(el => el % 2 !== 0);
// const eachElementInThirdIsEven = thirdArray.every(el => el % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(el => el % 2 !== 0);
// 31 =============================
// // Change code below this line
// const isEveryUserActive = (users) => {
//   return users.every(({isActive}) => isActive === true);
// };
// // Change code above this line
// 32 =============================
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(el => el % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(el => el % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(el => el % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(el => el % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(el => el % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(el => el % 2 !== 0);
// 33 =============================
// // Change code below this line
// const isAnyUserActive = users => {
//   return users.some(({isActive}) => isActive === true);
// };
// // Change code above this line
// 34 =============================
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, el, index, array) => {return acc += el}, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// 35 =============================
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// const totalAveragePlaytimePerGame = players.reduce((acc, el) => {
//   return acc += el.playtime / el.gamesPlayed
// }, 0) ;
// console.log(totalAveragePlaytimePerGame)
// 36 =============================
// const calculateTotalBalance = users => {
//   return users.reduce((acc, el) => {return acc += el.balance}, 0)
// };
// 37 =============================
// // Change code below this line
// const getTotalFriendCount = users => {
//   return users.reduce((acc, el) => {return acc += el.friends.length}, 0);
// };
// // Change code above this line
// 38 =============================
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line
// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();
// 39 =============================
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line
// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// 40 =============================
// const authors = [
  // "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line
// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// 41 =============================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line
// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));
// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// 42 =============================
// // Change code below this line
// const sortByAscendingBalance = users => {
//   return [...users].sort((a, b) => a.balance - b.balance);
// };
// // Change code above this line
// 43 =============================
// // Change code below this line
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };
// // Change code above this line
// 44 =============================
// // Change code below this line
// const sortByName = users => {
//   return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };
// // Change code above this line
// 45 =============================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter(el => el.rating > MIN_BOOK_RATING).map(el => el.author).sort();
// console.log(names)
// 46 =============================
// // Change code below this line
// const getNamesSortedByFriendCount = users => {
//   return [...users].sort((a, b) => a.friends.length - b.friends.length).map(({name})=> name);
// };
// // Change code above this line
// 47 =============================
// Change code below this line
// const getSortedFriends = users => {
//   return users.flatMap(user => user.friends).
//   filter((user, index, array) => array.
//   indexOf(user) === index).
//   sort((user1, user2) => user1.localeCompare(user2));
// };
// 48 =============================
// const getTotalBalanceByGender = (users, gender) => {
//   return users.filter(el => el.gender === gender).
//   reduce((acc, el) => {return acc += el.balance}, 0)
// };