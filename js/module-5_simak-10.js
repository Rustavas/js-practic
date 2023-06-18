//* Example 1 - Блогер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

//? email - пошта, рядок
//? age - вік, число
//? numberOfPosts - кількість постів, число
//? topics - масив тем на яких спеціалізується блогер

//? Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

//? Додай метод getInfo(), який, повертає рядок: Blogger ${пошта} is ${вік} years old and has ${кількість постів} posts.

//? Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
 
// class Blogger {

//   constructor({name, age, numberOfPosts, topics,}){
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   };
//   getInfo(){
//     return `Blogger ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`
//   };
//   updatePostCount(value){
//     return this.numberOfPosts += value;
//   };
// };

// const mango = new Blogger({
//     name: "mango@mail.com",
//     age: 24,
//     numberOfPosts: 20,
//     topics: ["tech", "cooking"],
// });
// console.log(mango)
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(7);
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//   name: "poly@mail.com",
//   age: 19,
//   numberOfPosts: 17,
//   topics: ["sports", "gaming", "health"],
// });
// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 21 posts





// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;



// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);



const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

setOutput();

select.addEventListener("change", setOutput);

function setOutput() {
  const selectedOptionValue = select.value;
  console.log(selectedOptionValue)
  const selectedOptionIndex = select.selectedIndex;
  console.log(selectedOptionIndex )
  const selectedOptionText = select.options[selectedOptionIndex].text;
  console.log(selectedOptionText)
  console.log(select.options)

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}