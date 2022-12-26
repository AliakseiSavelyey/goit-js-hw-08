// import throttle from 'lodash.throttle';

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   email: document.querySelector('.feedback-form input'),
//   textarea: document.querySelector('.feedback-form textarea'),
// };

// const STORAGE_INPUT = 'feedback-form-state';
// const STORAGE_TEXTAREA = 'feedback-form-state-two';

// refs.form.addEventListener('input', onFormSubmit);
// refs.email.addEventListener('input', throttle(onEmailInput, 1000));
// refs.textarea.addEventListener('input', throttle(onTextareaInput,1000));

// populateTextarea();

// function onFormSubmit(e) {
//   e.preventDefault();
//   e.target.reset();
//   localStorage.removeItem(STORAGE_INPUT);
// }

// function onEmailInput(e) {
//   const value = e.target.value;
//   localStorage.setItem(STORAGE_INPUT, value);
// }

// function onTextareaInput(e) {
//   const value = e.target.value;
//   localStorage.setItem(STORAGE_TEXTAREA, value);
// }

// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_INPUT);

//   if (savedMessage) {
//     console.log(savedMessage);
//     refs.email.value = savedMessage;
//   }
// }
// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_TEXTAREA);

//   if (savedMessage) {
//     console.log(savedMessage);
//     refs.textarea.value = savedMessage;
//   }
// }


import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
})();
