'use strict';

const buttonNew = document.querySelector('.btn--new'),
    buttonRoll = document.querySelector('.btn--roll'),
    buttonHold = document.querySelector('.btn--hold'),
    playerOne = document.querySelector('.player--0'),
    playerTwo = document.querySelector('.player--1'),
    scoreOne = document.querySelector('#score--0'),
    scoreTwo = document.querySelector('#score--1')


// const dice = document.querySelector('.dice');
let activePlayer, currentScore;
let score = [0, 0],
    playing = true,
    diceEl = document.querySelector('.dice');

function init() {
    activePlayer = 0;
    currentScore = 0;
    playing = true;
    scoreOne.innerHTML = 0;
    scoreTwo.innerHTML = 0;
    score = [0, 0];


    diceEl.classList.add('hidden');
    playerOne.classList.remove('player--winner');
    playerTwo.classList.remove('player--winner');
    playerOne.classList.add('player--active');
    playerTwo.classList.remove('player--active');
}

init();
