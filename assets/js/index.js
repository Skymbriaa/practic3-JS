'use strict';

// const form1v = document.getElementById('form');
// console.dir(form1v);

//прямый доступ до усих форм на сторинци
const form2v = document.forms.form;
console.dir(form2v);
//прямий дступ до всих интерактивних елементив форми
console.dir(form2v.elements);

const {login, submit} = form2v.elements;
// console.log(submit);
// console.log(login);

form2v.addEventListener('click', (event)=>{
    // event.preventDefault();
    console.log(event);
    console.log(event.type);
})

// 2 positions: "submit" and "reset"
form2v.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log(event);
})
