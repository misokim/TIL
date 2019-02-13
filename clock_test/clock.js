const clockForm = document.querySelector(".js-clock");
const clockArea = clockForm.querySelector("h1");


function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const miniutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockArea.innerText = `${hours < 10 ? `0${hours}` : hours}:${miniutes < 10 ? `0${miniutes}` : miniutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000)
}

init();