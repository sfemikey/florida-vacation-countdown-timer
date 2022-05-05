const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minsElement = document.getElementById("mins");
const secElement = document.getElementById("seconds");

const floridaTrip = "August 19 2022";

function countdown() {
  const floridaTripDate = new Date(floridaTrip);
  const currentDate = new Date();

  const totalSeconds = (floridaTripDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysElement.innerHTML = days;
  hoursElement.innerHTML = formatTime(hours);
  minsElement.innerHTML = formatTime(mins);
  secElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
