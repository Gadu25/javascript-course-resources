'use strict';

const messageText = document.querySelector('.message');
const checkButton = document.querySelector('.check');
const body = document.querySelector('body');
const scoreText = document.querySelector('.score');
const highScoreText = document.querySelector('.highscore');
const input = document.querySelector('.guess');
const againButton = document.querySelector('.again');
const number = document.querySelector('.number');

const number_to_guess = {
    number: 0,
    refresh: function () {
        this.number = Math.floor(Math.random() * 21);
    }
}

number_to_guess.refresh();

function deductScore() {
    scoreText.textContent -= 1;
    if (scoreText.textContent == 0) gameOver();
}

function resetScore() {
    scoreText.textContent = 20;
}

function gameOver() {
    messageText.textContent = "😭 You lose please try again.";
    number.textContent = number_to_guess.number;
    checkButton.disabled = true;
}

function win() {
    messageText.textContent = "🎉 Congratulations You've got it right!";
    if (scoreText.textContent > highScoreText.textContent) highScoreText.textContent = scoreText.textContent
    body.style.backgroundColor = '#60b347'
    number.textContent = number_to_guess.number;
    number.style.width = '30rem'
    checkButton.disabled = true;
}

function checkGuess(guess) {
    if (guess == number_to_guess.number) {
        win();
        number_to_guess.refresh();
    } else if (guess > number_to_guess.number) {
        messageText.textContent = "🔻 Try Lower 😉";
        deductScore();
    } else if (guess < number_to_guess.number) {
        messageText.textContent = "👆 Try Higher 😉";
        deductScore();
    } else {
        messageText.textContent = "Please guess between 1 and 20 😌"
        deductScore();
    }
}

checkButton.addEventListener('click', function () {
    if (input.value) checkGuess(input.value)
});

againButton.addEventListener('click', function () {
    number_to_guess.refresh();
    resetScore();
    input.value = '';
    checkButton.disabled = false;
    body.style.backgroundColor = '#222';
    number.style.width = '15rem';
    number.textContent = '?';
})