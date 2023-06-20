//TODO:==============================================
/*
Завдання 1
При натисканні на кнопку "SHOW ME" в консоль має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

// const refs ={
//   alertBtn: document.getElementById('alertButton'),
//   input: document.getElementById('alertInput'),
// };

// refs.alertBtn.addEventListener('click', onClgInput);

// function onInput() {
//   console.log(refs.input.value);
// }
// function onClgInput(event) {
//   onInput();
// };

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
// const refs = {
//   swapBtn: document.getElementById('swapButton'),
//   leftInput: document.getElementById('leftSwapInput'),
//   rightInput: document.getElementById('rightSwapInput'),
// };

// refs.swapBtn.addEventListener('click', onChangeInputValue);

// function onChangeInputValue(event) {
//   let changeValue = refs.leftInput.value;
//   refs.leftInput.value = refs.rightInput.value;
//   refs.rightInput.value = changeValue;
// }

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
// const refs = {
//   input: document.getElementById('passwordInput'),
//   passwordBtn: document.getElementById('passwordButton'),
// };

// refs.passwordBtn.addEventListener('click', onHiddenVisibleValue);

// let saveValue = '';
// function onHiddenVisibleValue(event) {
//   if(refs.passwordBtn.textContent === 'Приховати'){
//     backInputValue();
//     return;
//   };
//     saveInputValue();   
// };
// function saveInputValue() { 
//   refs.input.value = saveValue; 
//   refs.passwordBtn.textContent = 'Приховати';
//   // console.log(saveValue);
// };
// function backInputValue(){
//   saveValue = refs.input.value;
//   refs.input.value = '';
//   refs.passwordBtn.textContent = 'Розкрити';
//   // console.log(saveValue)
// }
//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, кнопка "Збільшити" - більше на 10 пікселів. Використай інструкцію switch
*/
// const refs = {
//   increase: document.getElementById('increase'),
//   decrease: document.getElementById('decrease'),
//   box: document.getElementById('box'),
// };


//TODO:==============================================
/*
Завдання 5
Додайде слухач кліку до сторінки і визначте, коли клік відбувається
всередині елемента з id "place" і коли клік припадає поза зоною елемента
В консоль виводь наступну повідомлення:
1. 'Клік відбувся всередині елемента з id "p"lace.'
2. "Клік відбувся поза зоною елемента js."
https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
*/
// document.body.addEventListener('click', onPlaceClick);
// function onPlaceClick(event) {
//   // console.log(event.target.id)
//   // console.log(event.currentTarget.id)
//   if(event.target.id === 'place'){
//     console.log("Клік відбувся всередині елемента з id 'place'.");
//     return;
//   };
//   console.log("Клік відбувся поза зоною елемента js.");
// };
//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/
// const refs = {
//   double: document.getElementById('double'),
//   numbersValues: document.querySelectorAll('.listItem'),
// };
// refs.double.addEventListener('click', onDouble);

// function onDouble(event) {
//   const arrayList = refs.numbersValues
//   arrayList.forEach((value, index) => {
//     arrayList[index].textContent = (Number(value.textContent) * 2)
//     console.log(arrayList[index].textContent)
//   });
// };

//TODO:==============================================
/*
Завдання 7
При кліку на коло воно повинно слідувати за курсором.
При повторному подвійному кліку воно стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

//TODO:==============================================
/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/
// const refs = {
//   button1: document.querySelector('[data-number = "5"]'),
//   button2: document.querySelector('[data-number = "2"]'),
//   button3: document.querySelector('[data-number = "10"]'),
//   button4: document.querySelector('[data-number = "50"]'),
//   button5: document.querySelector('[data-number = "0"]'),
//   button6: document.querySelector('[data-number = "20"]'),
//   showResult: document.querySelector('#resultButton'),
// };
// let sum = 0;
// let counterBtn1 = 0;
// let counterBtn2 = 0;
// let counterBtn3 = 0;
// let counterBtn4 = 0;
// let counterBtn5 = 0;
// let counterBtn6 = 0;
// refs.button1.addEventListener('click', onPlusBtn1);
// function onPlusBtn1(event) {
//   const value = Number(refs.button1.dataset.number);
//   sum += value;
//   counterBtn1 += 1;
//   // console.log(sum);
// };
// refs.button2.addEventListener('click', onPlusBtn2);
// function onPlusBtn2(event) {
//   const value = Number(refs.button2.dataset.number);
//   sum += value;
//   counterBtn2 += 1;
//   // console.log(sum);
// };
// refs.button3.addEventListener('click', onPlusBtn3);
// function onPlusBtn3(event) {
//   const value = Number(refs.button3.dataset.number);
//   sum += value;
//   counterBtn3 += 1;
//   // console.log(sum);
// };
// refs.button4.addEventListener('click', onPlusBtn4);
// function onPlusBtn4(event) {
//   const value = Number(refs.button4.dataset.number);
//   sum += value;
//   counterBtn4 += 1;
//   // console.log(sum);
// };
// refs.button5.addEventListener('click', onPlusBtn5);
// function onPlusBtn5(event) {
//   const value = Number(refs.button5.dataset.number);
//   sum += value;
//   counterBtn5 += 1;
//   // console.log(sum);
// };
// refs.button6.addEventListener('click', onPlusBtn6);
// function onPlusBtn6(event) {
//   const value = Number(refs.button6.dataset.number);
//   sum += value;
//   counterBtn6 += 1;
//   // console.log(sum);
// };
// refs.showResult.addEventListener('click', onShowResult);
// function onShowResult(event) {
//   console.log("sum ->", sum);
//   console.log("button1 pressed ->", counterBtn1);
//   console.log("button2 pressed ->", counterBtn2);
//   console.log("button3 pressed ->", counterBtn3);
//   console.log("button4 pressed ->", counterBtn4);
//   console.log("button5 pressed ->", counterBtn5);
//   console.log("button6 pressed ->", counterBtn6);
// };

//TODO:==============================================
/*
Завдання 9
Видалити зі списку елементи, які позначені.
*/
// const refs = {
//   checkbox1: document.getElementById('checkbox1'),
//   checkbox2: document.getElementById('checkbox2'),
//   checkbox3: document.getElementById('checkbox3'),
//   checkbox4: document.getElementById('checkbox4'),
//   checkbox5: document.getElementById('checkbox5'),
//   checkbox6: document.getElementById('checkbox6'),
//   checkbox7: document.getElementById('checkbox7'),
// };
//TODO:==============================================
/*
Завдання 10
Наведено список людей. Зроби можливість сортування списку на ім'я та на прізвище.
*/

//TODO:==============================================
/*
Завдання 11
Наведено список людей. Зроби фільтр на ім'я/прізвище.
*/

//TODO:==============================================
/*
Завдання 12
Клік по кнопці замінює символ першого поля введення
символ з другого поля введення в усьому тексті.
Якщо одне з полів порожнє, викликай alert із проханням заповнити їх.
*/

//TODO:==============================================
/*
Завдання 13
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/

//TODO:==============================================
/*
Завдання 14
Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
Додати класи на список eventList, на елементи eventCode та eventKey
*/

//TODO:======================
// Завдання 15
// Взяти попереднє завдання з Зоопарком та вивести звірів, їх тип та особливості в DOM.
// Додати до списку клас animalList.На елемент списку animalElement

//TODO:======================
// Завдання 16
//  Створіть HTML сторінку з табличкою,
//  яка містить список продуктів.Кожен рядок у
//  табличці повинен містити назву продукту та його ціну.
//  При натисканні на будь - який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.

//TODO:======================
// Завдання 17
// Створіть HTML сторінку з формою,
// яка містить поле введення для введення
// імені користувача та кнопку. При натисканні
// на кнопку відобразіть повідомлення з привітанням з іменем користувача.