'use strict';
let randNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randNumber);
let score = 20;

let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.input').value);
    if (!guess) {
        displayMessage('🚫 No Number!!');
    } else if (guess === randNumber) {
        displayMessage('🎉 Correct Number!!');
        document.querySelector('.number').textContent = randNumber;

        document.querySelector('body').style.backgroundColor = '#06d6a0';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== randNumber) {
        if (score > 1) {
            displayMessage(guess > randNumber ? '📈 TOO HIGH!!' : '📉 TOO LOW!!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('🧨 You Lost the Game!!')

            document.querySelector('.score').textContent = 0;
        }
    }
});


document.querySelector('.restart').addEventListener('click', function () {
    score = 20;
    randNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.input').value = '';

    document.querySelector('body').style.backgroundColor = '#383c41';
    document.querySelector('.number').style.width = '15rem';
});


