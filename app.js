const timeElement = document.querySelector('.time');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let time = 0;

const startTime = () => {
  setInterval(addTime, 100);
};

const addTime = () => {
  time += 1;
  console.log(time);
};

startButton.addEventListener('click', startTime);
