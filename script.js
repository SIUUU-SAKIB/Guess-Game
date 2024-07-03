`use strict`;
const randomNum = Math.trunc(Math.random() * 20 + 1);
const guess = document.querySelector(`.guess`);
const message = document.querySelector(`.message`);
const btn = document.querySelector(`.check`);
const currentScore = document.querySelector(`.score`);
console.log(randomNum);
let score = 20;
let highScore = 0;

btn.addEventListener(`click`, () => {
  let guess = Number(document.querySelector(`.guess`).value);

  if (!guess) {
    message.textContent = `⛔ No Number`;
  } else if (guess === randomNum) {
    message.textContent = `👌 Correct Number`;
    document.querySelector(`body`).style.backgroundColor = `#38b000`;
    if (score > highScore) {
      document.querySelector(`.highscore`).textContent = score;
    }
  } else if (score > 1) {
    if (guess > randomNum) {
      message.textContent = `👆 Too High`;
      score--;
      currentScore.textContent = score;
    } else if (guess < randomNum) {
      message.textContent = `👇 Too Low`;
      score = score - 1;
      currentScore.textContent = score;
    }
  } else {
    message.textContent = `💥 You lost the game`;
  }
});

document.querySelector(`.again`).addEventListener(`click`, () => {
  message.textContent = `Start guessing...`;
  guess.value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  currentScore=20
});
