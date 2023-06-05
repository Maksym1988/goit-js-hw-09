import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const dateTimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let targetDate = 0;
let intervalId = null;

startBtn.disabled = true;

Notiflix.Notify.init({
  position: 'center-top',
  timeout: 2000,
  cssAnimationStyle: 'zoom',
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    onCheckStartTimer(selectedDates);
  },
};

flatpickr(dateTimePicker, options);

function onCheckStartTimer(dates) {
  targetDate = dates[0];
  if (targetDate < new Date()) {
    Notiflix.Notify.failure('Please choose a date in the future');
  } else {
    startBtn.disabled = false;
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

startBtn.addEventListener('click', onStartTimer);

function onStartTimer() {
  intervalId = setInterval(() => {
    const differenceTime = targetDate - new Date();

    if (differenceTime <= 0) {
      clearInterval(intervalId);
      startBtn.disabled = true;
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(differenceTime);

    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
  }, 1000);
}
