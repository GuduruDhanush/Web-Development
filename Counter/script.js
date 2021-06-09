'use strict';

let counter = Number(document.querySelector('.counter').textContent);

const counterText = document.querySelector('.counter');


document.querySelector('.decrease').addEventListener('click', function () {
    counter--;
    counterText.textContent = counter;
    counterText.style.color = 'red';
})

document.querySelector('.reset').addEventListener('click', function () {
    counter = 0;
    counterText.textContent = '0';
    counterText.style.color = 'black';
})

document.querySelector('.increase').addEventListener('click', function () {
    counter++;
    counterText.textContent = counter;
    counterText.style.color = 'green';
})
