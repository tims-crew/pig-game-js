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

function switchPlayer() {
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;
    playerOne.classList.toggle('player--active');
    playerTwo.classList.toggle('player--active');
}

buttonRoll.addEventListener('click', function() {
    if (playing) {
        let dice = Math.trunc(Math.random() * (6-1) + 1)

        diceEl.classList.remove('hidden');
        diceEl.src = `img/dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
})

buttonHold.addEventListener("click", function() {
    if (playing) {
        score[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer];

        if (score[activePlayer] >= 100) {
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        } 

        switchPlayer();
    }
})

buttonNew.addEventListener('click', init)
