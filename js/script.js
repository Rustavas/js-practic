/**
 *?     Используя функцию if...else,
 *?     напишите код, который будет спрашивать:
 *?     "Какое официальное название JavaScript?"
 *?     Если пользователь вводит "ECMAScript",
 *?     то показать через alert: "Верно!"
 *?     в противном случае отобразить:"Не знаете? ECMAScript!"
 */

/** 1. Треба прийняти те що ввів користувач
 * 2. Звірити це з умовою
 * 3. видати відповідь
 */
// let whatSayUser = prompt('Яка офіційна назва JavaScript?');
// if (whatSayUser === 'ECMAScript') {
//   alert('Вірно!');
// } else {
//   alert('Не знаєте! ECMAScript!');
// }

//Новый js==========================================

/**
 *?      Напишите программу, которая получит от пользователя
 *?      число (количество минут) и выведет в консоль
 *?      строку в формате часов и минут
 *?      https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 *?      70 === 01:10
 */

// const whatSayUser = prompt(`Ввести число`);
// const hours = String(Math.floor(whatSayUser / 60)).padStart(2, 0);
// console.log(hours);
// hours.padStart(2, 0);
// const mins = String(whatSayUser % 60).padStart(2, 0);
// console.log(mins);
// hours.padStart(2, 0);

// console.log(`${hours}:${mins}`);
