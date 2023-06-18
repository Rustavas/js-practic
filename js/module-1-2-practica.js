"use strict";

//==============================
// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"

// const res = prompt("Input your name");
// const str = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(res, str){
//   if(str.includes(res)){
//    return alert("Доступ дозволено");
//   }
//   return  alert("There is no such user!")
// }
// checkLogin(res, str)

// ==============================
// Напишіть функцію min(a,b), яка повертає менше із чисел a і b.

// function min(a, b){
//   if(a > b){
//     return console.log(a); 
//   };
//   if(a < b){
//     return console.log(b);
//   };
//     return console.log("They are equal!")
// };
// min(543, 8);
// ==============================
// //  Що виведе наступний код?
// let fruits = ['Яблука', 'Груша', 'Апельсин'];
// // Додаємо нове значення в "копію"
// let shoppingCart = fruits;
// shoppingCart.push('Банан');
// // що у fruits?
// console.log(fruits.length);
// ===========================
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте «Рок-н-рол» в кінець.
// Замініть значення «Блюз» на «Класика».
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ['Jazz', 'Blues'];
// styles.push('Rock-and-roll');
// styles.splice(styles.length - 1, 1, 'Classic')
// console.log(styles.splice(0, 1));
// styles.unshift('Rap', 'Reggae');
// console.log(styles);
// ==========================
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа
// function min(a, b){
//   if(Number.isNaN(a) === false && Number.isNaN(b) === false){
//     if(a < b){
//       return console.log(a);
//     };
//     if(a > b){
//       return console.log(b);
//     };
//     if(a === b){
//       return console.log('They are equal!');
//     }
//   }
//   return console.log('Arguments is not numbers!')
// };
// min(18, 18);
// ==============================
// Напишіть функцію pow(x,n), яка повертає x до ступеня n.
// Інакше висловлюючись, множить x він n разів і повертає результат.
// function pow(x, n){
//   return console.log(Math.pow(x, n));
// };
// pow(3, 3)
// ==============================
// // Напишіть функцію яка сумуватиме сусідні числа і пушитиме їх в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// const newArr = [];
// function SubmitEvent(someArr, newArr){
//   for(let i = 0; i < someArr.length; i += 2){
//    newArr.push(someArr[i] + someArr[i + 1]);
//   }
//   return console.log(newArr);
// }
// SubmitEvent(someArr, newArr)
// ==========================
// Напишіть функцію logItems(array), яка приймає
// масив та використовує цикл for, який для кожного
// елемента масиву виводитиме повідомлення у форматі
// <номер елемента> - <значення елемента>
// Нумерація елементів має починатися з першого.
// const array = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']
// //  const array = [{name: 'Джаз', engl: "jazz", number: 1}, {name: 'Блюз', engl: "blues", 
// // number: 2}, {name: 'Рок-н-рол', engl: "rock 'n' roll", number: 3}, 
// // {name: 'Реггі', engl: "reggae", number: 4}, {name: 'Реп', engl: "rap", number: 5}];
// function logItems(array){
//   for(let i = 0; i < array.length; i += 1){
//     console.log(`${i + 1} - ${array[i]}`);
//     // console.log(`${array[i].number} - ${array[i].name}`);
//   }
//   return
// };
// logItems(array)
// ==========================
// Напиши функцію findSmallerNumber(numbers)
// яка шукає найменше число в масиві.
// Додай перевірку що функція отримує масив
// const numbers = [-8, 2, 5, 35, 56, 12, 24, 7, -80, 3];
// let minNumber = numbers[0];
// function findSmallerNumber(numbers){
//   if(Array.isArray(numbers)){
//     for(let i = 0; i < numbers.length; i += 1){
//       if(numbers[i] <  minNumber){
//         minNumber = numbers[i];
//       };  
//     };
//   };
//     return console.log(minNumber);
// };
//   findSmallerNumber(numbers);
// ==============================
// Функція formatMessage(message, maxLength)
// приймає рядок (параметр message) і форматує його,
// якщо довжина перевищує значення параметрі maxLength.

// formatMessage("Curabitur ligula sapien", 16); //Повертає 'Curabitur ligula...'.
// formatMessage("Curabitur ligula sapien", 23); //Повертає 'Curabitur ligula sapien'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15); //Повертає 'Nunc sed turpis...'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41); //Повертає 'Nunc sed turpis a felis in nunc fringilla'.
// function formatMessage(message, maxLength){
//   if(message. length > maxLength){
//     return console.log(`${message.slice(0, maxLength)}...`)
//   };
//   return console.log(message);
// };
// formatMessage("Curabitur ligula sapien", 16);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);
// ==========================
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.


// function calculateAverage(){
//     const args = arguments;
//     let totalCount = 0;
//     let sum = 0;
//       for (const arg of args){
//         if(typeof arg !== 'number'){
//           continue;
//         }
//         console.log(arg)
//         sum += arg;
//         totalCount += 1;
//       }
//       console.log(sum / totalCount);
// }
// calculateAverage(1, 2, 3, 4, 5)
// ==========================
// Напиши функцію findLongestWord(string)
// яка приймає довільний рядок
// що складається лише з розділених слів
// пробілом (параметр string)
// і повертає найдовше слово у цьому рядку
// function findLongestWord(string){
  // const string = "яка" "приймає" "довільний" "рядок";
// function findLongestWord(string){
//   let wordLength = 0;
//   let longestWord;
//   const words = string.split(' ');
//     // console.log(words)
//   for(const word of words){
//     if(wordLength < word.length){
//       wordLength = word.length;
//     longestWord = word;
//     };
//   };
//   console.log(longestWord);
// }
// findLongestWord("яка приймає довільний рядок");
// ==========================
// Напишіть код для пошуку пароля в масиві
// Через include і тернарний оператор
// const passwords = ['ajax123', 'polly456', 'mango789', 'semiBold'];
// const password = 'semiBold';
// function searchPassword(password, passwords){
//  return passwords.includes(password)? console.log('Your password is valid!') : console.log('Your password is not valid!')
// };
// searchPassword(password, passwords)
// ==========================
// Напишіть скрипт, який замінює регістр кожного символу
// у рядку на протилежний
// Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'
// const message = 'JavaScript'
// function changeCase(message){
//   let newMessage = '';
//   for(const mess of message){
//     if(mess === mess.toUpperCase()){
//       newMessage += mess.toLowerCase();
// } else {
//   newMessage += mess.toUpperCase();
// }
//   }
//   // for(let i = 0; i < message.length; i += 1){

//   //   if(message[i] === message[i].toUpperCase()){
//   //         newMessage += message[i].toLowerCase();
//   //   } else {
//   //     newMessage += message[i].toUpperCase();
//   //   }
//   // }
//   console.log(newMessage);
// }

// changeCase(message);
// ============================
// Напишіть функцію unique(arr), яка повертає масив, який
// містить лише унікальні елементи arr.
// const words = ["HTML","CSS", "JS", "React", "JS", "CSS", "JS",
// "Node.js", "JS", "React", "CSS", "React", "HTML", "Node.js"];
// function unique(arr){
//   const uniqueWordsArray = [];
//   for(const word of words){
//       if(uniqueWordsArray.includes(word)){
//         continue;
//       } else {
//         uniqueWordsArray.push(word);
//       }
//   }
//   return console.log(uniqueWordsArray);
// };
// unique(words);
// ==============================
// Привести масив до одного рівня
// const arr = 
// [23, 11, ["hello", "world", "Vasya"]];
// console.log(arr.flat())
// ==============================
//  * Працюємо з колекцією товарів у кошику:
//  * - getItems()
//  * - add(product)
//  * - remove(productName)
//  * - clear()
//  * - countTotalPrice()
//  * - increaseQuantity(productName)
//  * - decreaseQuantity(productName)
const productArray = [
  { name: '🍎', price: 50 },
  { name: '🍇', price: 70 },
  { name: '🍋', price: 60 },
  { name: '🍓', price: 110 },
];

const shoppingCart = [];
function add(product){
  
}