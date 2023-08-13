const btn = document.querySelector('#alertButton');
const input = document.querySelector('#alertInput');

btn.addEventListener('click', onClickAllertBtn(input));

function onClickAllertBtn(input) {
  const a = 'привет';
  return function (event) {
    // alert(input.value);
  
      if (!input.value.trim()) {
        console.log('привіт');
      }
    // console.log(event);
    // console.log(a);
  };
}

// input.value.trim() === "" ||require

/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

const a = 10;
const b = 20;

function foundNumbers(a, b) {
  const c = 30;
  return function () {
    return a + b + c;
  };
}

const newFunction = foundNumbers(a, b);
console.log(newFunction());


