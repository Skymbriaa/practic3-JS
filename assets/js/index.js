'use strict';

console.log('start')

function numbers() {
  let number = 1;

  let interval = setInterval(() => {
    console.log(number);
    number++;

    if (number > 10) {
      clearInterval(interval);
    }
  }, 500);
}

numbers()
