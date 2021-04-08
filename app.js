const timeElement = document.querySelector('.time');
const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const milisecondsElement = document.querySelector('.miliseconds');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let time = 0;
let miliseconds = time % 100;
let seconds = Math.floor((time / 100) % 60);
let minutes = (time / 6000) % 60;
let hours = time / 360000;
let dateStart;
let timeStart;
let dateNow;
let timeNow;
let isStopTime = false;
let dateStop;
let timeStop;

let startTimeInterval;

const startTime = () => {
  clearInterval(startTimeInterval);
  dateStart = new Date();
  timeStart = dateStart.getTime();
  startTimeInterval = setInterval(addTime, 10);
};

const stopTime = () => {
  dateStop = clearInterval(startTimeInterval);
};

const resetTime = () => {
  clearInterval(startTimeInterval);
  time = 0;
  setTimeToLS(time);
  changeVisibleTime(time);
};

const addTime = () => {
  dateNow = new Date();
  timeNow = dateNow.getTime();
  time = Math.floor((timeNow - timeStart) / 10);
  setTimeToLS(time);
  changeVisibleTime(time);
};

const setTimeToLS = time => {
  localStorage.setItem('time', JSON.stringify(time));
};

startButton.addEventListener('click', startTime);
stopButton.addEventListener('click', stopTime);
resetButton.addEventListener('click', resetTime);

const changeVisibleTime = time => {
  miliseconds = time % 100;
  seconds = Math.floor((time / 100) % 60);
  minutes = Math.floor((time / 6000) % 60);
  hours = Math.floor(time / 360000);

  hours < 10
    ? (hoursElement.innerHTML = `0${hours}`)
    : (hoursElement.innerHTML = hours);

  minutes < 10
    ? (minutesElement.innerHTML = `0${minutes}`)
    : (minutesElement.innerHTML = minutes);

  seconds < 10
    ? (secondsElement.innerHTML = `0${seconds}`)
    : (secondsElement.innerHTML = seconds);

  miliseconds < 10
    ? (milisecondsElement.innerHTML = `:0${miliseconds}`)
    : (milisecondsElement.innerHTML = `:${Math.floor(time % 100)}`);
};

const changeTimeButton = value => {
  time += value;
  if (time < 0) time = 0;
  changeVisibleTime(time);
};
