'use strict';

// buttons
const newGameButton = document.querySelector('.btn--new');
const rollDiceButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');

const dice = document.querySelector('.dice');

// players
class Player {
    constructor(player) {
        this.player = document.querySelector('.player--' + player);
        this.score = document.querySelector('#score--' + player);
        this.totalScore = document.querySelector('#current--' + player);
    }
    addScore(score) {
        this.score.textContent = parseInt(this.score.textContent) + score;
    }
    saveScore() {
        this.totalScore.textContent = parseInt(this.totalScore.textContent) + parseInt(this.score.textContent)
    }
    resetScore() {
        this.score.textContent = 0;
    }
    getTotalScore() {
        return parseInt(this.totalScore.textContent)
    }
    resetTotalScore() {
        this.totalScore.textContent = 0;
    }
    removeActive() {
        if (this.player.classList.contains('player--active')) this.player.classList.remove('player--active')
    }
    addActive() {
        if (!this.player.classList.contains('player--active')) this.player.classList.add('player--active')
    }
}

// initializing
const playerOne = new Player('0');
const playerTwo = new Player('1');
const players = {
    player: [playerOne, playerTwo],
    turn: 0,
    changeTurn: function () {
        this.player[this.turn].removeActive()
        this.turn = this.turn == 0 ? 1 : 0
        this.player[this.turn].addActive()
    },
    reset: function () {
        for (let player of this.player) {
            player.resetScore()
            player.resetTotalScore()
        }

        playerOne.addActive()
        playerTwo.removeActive()
        this.turn = 0
    }
}
let turn = 0;
reset();


// functions
function reset() {
    if (rollDiceButton.classList.contains('hidden')) rollDiceButton.classList.remove('hidden');
    if (holdButton.classList.contains('hidden')) holdButton.classList.remove('hidden');
    dice.classList.add('hidden');
    players.reset()
}

// event listeners
rollDiceButton.addEventListener('click', function () {
    if (dice.classList.contains('hidden')) dice.classList.remove('hidden');

    let randomNumber = Math.floor(Math.random() * 6) + 1;
    dice.src = `dice-${randomNumber}.png`;
    if (randomNumber != 1) {
        players.player[players.turn].addScore(randomNumber);
    } else {
        players.player[players.turn].resetScore();
        players.changeTurn();
    }
});

holdButton.addEventListener('click', function () {
    players.player[players.turn].saveScore();

    if (parseInt(players.player[players.turn].totalScore.textContent) >= 100) {
        rollDiceButton.classList.add('hidden');
        holdButton.classList.add('hidden');
        alert("Congratulations Player 1! You've Won 🎉")
    } else {
        players.player[players.turn].resetScore();
        players.changeTurn();
    }

});

newGameButton.addEventListener('click', function () {
    reset();
})