const timeElement = document.querySelector('.time');
const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const milisecondsElement = document.querySelector('.miliseconds');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let time = 0;

const startTime = () => {
  setInterval(addTime, 10);
};

const addTime = () => {
  time += 1;
  (time / 100) % 60 < 10
    ? (secondsElement.innerHTML = `0${Math.floor(time / 100) % 60}`)
    : (secondsElement.innerHTML = Math.floor(time / 100) % 60);
  milisecondsElement.innerHTML = Math.floor(time % 100);
};

startButton.addEventListener('click', startTime);
