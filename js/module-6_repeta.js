
const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
  event.preventDefault();
  // const formElements = event.currentTarget.elements;
  // console.dir(event.currentTarget.elements)
  // const mail = formElements.email.value;
  // const password = formElements.password.value;
  // const subscription = formElements.subscription.value;
  // const formData = {
  //   mail,
  //   password,
  //   subscription
  // }
  // console.log(formData);
  
  const formData = new FormData(event.currentTarget);
  console.log(formData);
  formData.forEach((value, name) => {
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
  }) 
}
// !==========================================================

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button')
};

refs.input.addEventListener('input', onInputChange);
refs.licenseCheckbox.addEventListener('change', onLicenseChange);

function onInputChange(event) {
  // console.log(event.currentTarget.value);
  refs.nameLabel.textContent = event.currentTarget.value;
};
function onLicenseChange(event) {
  // console.log(event.currentTarget.checked);
  refs.btn.disabled = !event.currentTarget.checked;
};

// !====================================================================
  
const refs2 = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

// window.addEventListener('keydown', onKeyDown);
// function onKeyDown(event) {
//   // * 'keydown' - отслеживает нажатие всех клавиш на клавиатуре, в том числе и служебных
//   console.log('event.key: ', event.key)
// }
window.addEventListener('keypress', onKeyPress);
refs2.clearBtn.addEventListener('click', onClearOutput);
function onKeyPress(event) {
  // * 'keypress' - отслеживает нажатие только клавиш символов (букв и тд)
  // console.log('event.key: ', event.key)
  // console.log('event.key: ', event.code)
  refs2.output.textContent += event.key
}
function onClearOutput(event) {
  refs2.output.textContent = "";
};
