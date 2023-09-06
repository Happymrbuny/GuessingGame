'use strict';

let secretNumber, score;
let highScore = 0;
resetGame();

//Set starting values
function resetGame() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    setScore(score);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    setMessage('Start guessing...');
}

//Set message
function setMessage(message) {
    document.querySelector('.message').textContent = message;
}

//Set score
function setScore(score) {
    document.querySelector('.score').textContent = score;
}

//Reset button
document.querySelector('.again').addEventListener('click', function () {
    resetGame();
});

//Main game functionality
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    //No input
    if (!guess) {
        setMessage('No number!');
        //Player wins
    } else if (guess === secretNumber) {
        setMessage('Correct guess!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            score--;
            setScore(score);
            setMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
        } else {
            setMessage('You lost the game!');
            setScore(0);
        }
    }
});
