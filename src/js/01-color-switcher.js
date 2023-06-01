const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startBtn.addEventListener('click', onChangeBodyColor);
stopBtn.addEventListener('click', offChangeBodyColor);
let timerId = null;

function changeBodyColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}

function onChangeBodyColor() {
  startBtn.disabled = true;
  timerId = setInterval(changeBodyColor, 1000);
}

function offChangeBodyColor() {
  startBtn.disabled = false;
  clearInterval(timerId);
}
