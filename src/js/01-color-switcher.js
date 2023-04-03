function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const startButtonEl = document.querySelector('[data-start]');
const stopButtonEl = document.querySelector('[data-stop]');
let timerId = null;
stopButtonEl.setAttribute('disabled', true);

 function onStartColorChange() {
    startButtonEl.setAttribute('disabled', true);
    stopButtonEl.removeAttribute('disabled', true);
     timerId = setInterval(() => {
         bodyEl.style.backgroundColor = getRandomHexColor();
     }, 1000);
 }

function onStopColorChange() {
    startButtonEl.removeAttribute('disabled', true);
    stopButtonEl.setAttribute('disabled', true);
    clearInterval(timerId);

}

startButtonEl.addEventListener('click', onStartColorChange);
stopButtonEl.addEventListener('click', onStopColorChange);



