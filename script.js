'use strict';
const buttons = document.querySelectorAll('.btn');
const submit = document.querySelector('.submit');
let rate;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    rate = buttons[i].textContent;
    return rate;
  });
}

submit.addEventListener('click', function () {
  if (rate) {
    document.querySelector('span').textContent = rate;
    document.querySelector('.card1').classList.toggle('hid');
    document.querySelector('.card2').classList.toggle('hid');
  }
});
