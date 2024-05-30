'use strict';

console.log('start')

const btn = document.getElementById('btn');

btn.addEventListener('click', handlerBtn);

function handlerBtn(event) {
  let date;
  for (let i = 0; i < 5; i++) {
    date = new Date();
    console.log(date.time());
  }
}

console.log('end')
