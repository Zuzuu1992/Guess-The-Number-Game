const body = document.body;
const randomNumber = document.querySelector(".number");
const inputNumber = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const hintMessage = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const reset = document.querySelector(".again");

let randomNumberValue = Math.floor(Math.random() * 100) + 1;

checkButton.addEventListener("click", () => {
  const inputNumberValue = Number(inputNumber.value);
  const scoreValue = parseInt(score.textContent);

  if (inputNumberValue !== randomNumberValue) {
    score.textContent = scoreValue - 1;
    if (inputNumberValue > randomNumberValue) {
      hintMessage.textContent = "🔺 Too High";
    } else if (inputNumberValue < randomNumberValue) {
      hintMessage.textContent = "🔻 Too Low!";
    }
  }
  if (inputNumberValue === 0) {
    hintMessage.textContent = "⛔ NO Number!";
    score.textContent = scoreValue;
  }
  if (inputNumberValue !== randomNumberValue && scoreValue === 1) {
    hintMessage.textContent = "💥 You Lost The Game!";
    score.textContent = "0";
  }
  if (scoreValue <= 0) {
    score.textContent = "0";
    hintMessage.textContent = "💥 You Lost The Game!";
  }
  if (inputNumberValue === randomNumberValue) {
    hintMessage.textContent = "✅ Correct Number!";

    highscore.textContent = scoreValue;
    body.style.backgroundColor = "#60b347";
    randomNumber.textContent = randomNumberValue;
    inputNumber.disabled = true;
  }
});
