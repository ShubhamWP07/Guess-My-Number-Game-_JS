'use strict';

let secNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no number
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';

    // when the guess is correct
  } else if (guess === secNumber) {
    document.querySelector('.number').textContent = secNumber;
    document.querySelector('.message').textContent = '🥳 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b341';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When the guess is wrong
  else if (guess !== secNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secNumber ? '🙄 Too High' : '😔 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😫 You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.message').textContent = 'Start Guessing.... 🙂';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
