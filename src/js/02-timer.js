import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const startBtnEl = document.querySelector('[data-start]');
startBtnEl.setAttribute('disabled', true);
const rootSelector = document.querySelector('.timer');


flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      Notiflix.Notify.warning(`Please choose a date in the future!`);
      startBtnEl.setAttribute('disabled', true);
    } else {
      startBtnEl.removeAttribute('disabled', true);
      timer.deadline = selectedDates[0];
    }
  }
})  

const timer = {
  intervalId: null,
  start() {
    this.intervalId = setInterval(() => {
      const ms = this.deadline - Date.now();
      if (ms <= 0) {
        this.stop();
        startBtnEl.setAttribute('disabled', false)
        return
      }
      let { days, hours, minutes, seconds } = this.convertMs(ms);
      rootSelector.querySelector('[data-days]').textContent =
        this.addLeadingZero(days);
      rootSelector.querySelector('[data-hours]').textContent =
        this.addLeadingZero(hours);
      rootSelector.querySelector('[data-minutes]').textContent =
        this.addLeadingZero(minutes);
      rootSelector.querySelector('[data-seconds]').textContent =
        this.addLeadingZero(seconds);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },
  convertMs(ms) {
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
  },
  
  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  },

};
    
startBtnEl.addEventListener('click', timer.start.bind(timer));

//step 1 ??
//step 2 викликати функцію flatpickr за документацією (який аргумент їй передати?), що ініціалізує бібліотеку
// flatpickr створює інтрефейс календаря?
//step 3 flatpickr(selector, options) -- що таке селектор?
//options -- подставити об'єкт
//const options = {
 // enableTime: true,
 // time_24hr: true,
 // defaultDate: new Date(),
 // minuteIncrement: 1,
  //onClose(selectedDates) {
    //console.log(selectedDates[0]);
  //},
//};

//step 3 в методі онклоуз написати перевірку дати? які змінні сюди включити? поточний час обраний користувачем? та порівняти його з датою + та - від нього? як правильно написати дату обрану користувачем? писати  через інпут велью? через селектед дейс с індексом?
//також повісити перемикач активної/неактивної кнопки старт
//також треба повісити лістенер по кнопці старт / в якій області видимості?
//відлік часу: це вже створення нової функції? створити нові 3 функції: відліку часу, рендеру та конвертації
//через що вставляти значення -- _текст контент_, велью чи иннер/інсерт хтмл?
//
