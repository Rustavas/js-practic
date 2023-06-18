"use strict";
/**
  |============================
  | Завдання 1
  |============================
*/
// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача через prompt
// та викликає callback-функцію greet(name)
// greet(name) - callback-функція, що приймає ім'я і виводить в консоль
// рядок "Привіт <name>"
// Реалізуте перевірку, що у prompt() введено значення, в інакшому випадку
// виведіть в консоль повідомлення "Ви не ввели імʼя"
//++++++++++++++++++ Рішення ++++++++++++++++++
// const letMeSeeYourName = (callback) =>{
//   const yourName = prompt('Введіть ім‘я користувача');
//   if(!yourName){
//     return alert('Ви не ввели імʼя')
//   } return callback(yourName);
// };
// const greet = (name)=> {
// console.log(`Привіт ${name}!`);
// };
// letMeSeeYourName(greet)
/**
  |============================
  | Завдання 2
  |============================
*/
// Напишіть дві функції:
// 1. makeProduct(name, price, callback), яка приймає
// ім'я, ціну товару, а також callback-функцію.
// Функція makeProduct() створює об'єкт товару <product>, додаючи йому унікальний
// ідентифікатор, ключ з імʼям <id> (для цього використайте виклик new Date().getTime())
// і викликає callback-функцію, передаючи їй створений об'єкт
// 2. showProduct(product) - коллбек, який приймає об'єкт
// продукту і виводить інформацію у консоль
//++++++++++++++++++ Рішення ++++++++++++++++++++++++
// function makeProduct(name, price, callback){
//   const product = {
//     name,
//     id: new Date().getTime(),
//     price,
//   }
//   return callback(product);
// }
// const showProduct = product => console.log(product);
// makeProduct("mango", 1500, showProduct);
// makeProduct('apple', 120, showProduct)
/**
  |============================
  | Завдання 3
  |============================
*/
// Виконай рефакторинг makeDish так, щоб не потрібно було
// щоразу передавати ім'я шефа.
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа під час її виклику

// const makeDish = function (shefName, dish) {
// console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");
//++++++++++++++++++ Рішення ++++++++++++++++++
// function makeShef(shefName){
//   return function makeDish(dish){
//     console.log(`${shefName} is cooking ${dish}`)
//   }
// }
// const mango = makeShef("Mango")
// const poly = makeShef("Poly")
// mango("apple pie");
// poly("muffins");
/**
  |============================
  | Завдання 4
  |============================
*/
// Напишіть функцію each(array, callback)
// Функція першим параметром приймає масив довільних чисел,
// а другим - callback-функцію, яка застосовується до кожного елементу масиву.
// Функція each() повинна повернути новий масив, елементами
// якого будуть результати виклику callback-функції
// callback-функція повинна множити елементи на 2
// Реалізуйте callback-функцію двома способами:
//  - за допомогою function declaration
//  - за допомогою arrow function
//++++++++++++++++++ Рішення ++++++++++++++++++
// 1.
// const arr = [2, 4, 5, 8, 12]
// function each(array, callback){
// return console.log(callback(array));
// }
// function multyArray(array){
//   return array.map(el => el * 2);
// }
// 2.
// const each = (array, callback) => {
//   return console.log(callback(array));
// };
// const multyArray = (array) => {
//   return array.map(el => el * 2);
// }
// each(arr, multyArray);
//
/**
  |============================
  | Завдання 5
  |============================
*/
// Напишіть функцію makeCounter(), яка повертає іншу функцію,
// яка підраховує та логує кількість своїх викликів
// Реалізуйте внутрішню функцію двома способами:
//  - за допомогою function declaration
//  - за допомогою arrow function
//++++++++++++++++++ Рішення ++++++++++++++++++
// ?================================
// function makeCounter() {
//   let call = 0
//   return function counter(){
//     return console.log(call += 1);
//   };
// };
//   const counter = makeCounter()
//   counter();
//   counter();
//   counter();
//   почему не работает makeCounter(), а только через переменную counter?
// ?================================
// function addition(call){
//   call += 1;
//   console.log(call)
// };
// let counter = 0;
// function makeCounter(callback){
  
//   return callback()
// };
// function counterPlus(){
//   console.log(counter += 1); 
// };
// const countMaker = makeCounter(counterPlus);
// countMaker();
// countMaker();
// countMaker();
// countMaker();

// ?================================
/**
  |============================
  | Завдання 6
  |============================
  // ?================================
*/
// Напишіть функцію savePassword(password), яка приймає значення паролю,
// який потрібно зберегти і повертає внутрішню функцію checkPassword(),
// що приймає рядок з паролем на перевірку і повертає відповідь у вигляді рядка
// "Збережений пароль: qwerty збігається з введеним паролем qwerty",
// якщо рядок збігається зі збереженим паролем або якщо не збігається
// "Збережений пароль: qwerty не збігається з введеним паролем asdfgh",
//++++++++++++++++++ Рішення ++++++++++++++++++
// function savePassword(password){
//   const savedPassword = ['qwerty', 'qweqwe', 'asdasd', 'zxczxc'];
//   return function checkPassword(savedPassword){
//     console.log(savedPassword)
//     // if(savedPassword.value === password){
//     //   `Збережений пароль: ${savedPassword.value} збігається з введеним паролем ${password}`
//     // }
//   }
// }
// const save = savePassword("asd")
// save()






// let newPassword = "";
// function savePassword(password){
//   const password = password;

//   return checkPass();
    
//   }

// function checkPassword(newPassword){
//   if(password === newPassword){
//   return console.log `Збережений пароль: ${password} збігається з введеним паролем ${newPassword}`
// }return `Збережений пароль: ${password} не збігається з введеним паролем ${newPassword}`
// }
// const checkPass = checkPassword(newPassword)
// ?================================
/**
  |============================
  | Завдання 7
  |============================
*/
// Напишіть функцію для зберігання знижки saveDiscount().
// Функція saveDiscount() повертає внутрішню функцію makeDiscount(),
// яка приймає суму покупки і повертає фінальну суму
// зi збереженою знижкою.
// Проведіть рефакторинг функції saveDiscount(), використовуючи
// стрілочні callback-функції
//++++++++++++++++++ Рішення ++++++++++++++++++

// ====================================
// Корзина интеренет- магазина
// const products = [
//   { name: "SAMSUNG", price: 15000 },
//   { name: "LG", price: 9000 },
//   { name: "DELL", price: 27000 },
//   { name: "BENQ", price: 12000 },
//   { name: "ASER", price: 7000 },
// ];

// const cart = {
//   items: [],
//   getItems(){
//     return this.items;
//   },
//   addProduct(product){
//     const newProduct = {
//       ... product,
//       quantity: 1,
//       totalPriceOfItem: product.price ,
//     };
//     for(const item of this.items){
//       if(item.name === product.name){
//         item.quantity += 1;
//         item.totalPriceOfItem = product.price * item.quantity; 
//         return;
//       };
//     };
//     this.items.push(newProduct); 
//   },
//   removeProduct(productName){
//     const { items } = this;
//     for(let i = 0; i < items.length; i += 1){
//       const { name } = items[i];
//       if(name === productName){
//         items.splice(i, 1);
//       }
//     }
//   },
//   clearItems(){
//     this.items.length = 0;
//   },
//   countTotalPrice(){
//     const { items } = this;
//     let totalPrice = 0;
//     for(const { price, quantity } of items){
//       totalPrice += price * quantity;
//     }
//     return totalPrice;
//   },
//   increaseQuantity(productName){
//     for(const item of this.items){
//       if(item.name === productName){
//         item.quantity += 1;
//       };
//     };
//     return;
//   },
//   decreaseQuantity(productName){
//     for(const item of this.items){
//       if(item.name === productName){
//         item.quantity -= 1;
//       };
//     };
//     return;
//   },
// };

// console.table(cart.getItems());
// cart.addProduct(products[0]);
// cart.addProduct(products[1]);
// cart.addProduct(products[2]);
// cart.addProduct(products[3]);
// cart.addProduct(products[3]);
// cart.addProduct(products[3]);
// cart.addProduct(products[3]);
// cart.addProduct(products[4]);
// console.table(cart.getItems());
// // cart.removeProduct("ASER");
// // console.table(cart.getItems());
// // cart.clearItems();
// // console.table(cart.getItems());
// // console.log(cart.getItems());
// // console.log(cart.countTotalPrice())
// cart.decreaseQuantity("BENQ");
// cart.increaseQuantity("SAMSUNG")
// console.table(cart.getItems());