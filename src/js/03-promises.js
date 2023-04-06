import Notiflix from 'notiflix';
const formEl = document.querySelector('.form');

function onFormSubmit(event) {
  event.preventDefault();
  console.log(event);
  let delay = Number(event.target.elements.delay.value);
  console.log(delay);
  const step = Number(event.target.elements.step.value);
  const amount = Number(event.target.elements.amount.value);
  for (let i = 1; i <= amount; i++) {
    createPromise(i,  delay)
    .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delay + step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  }, delay);
}

formEl.addEventListener('submit', onFormSubmit);
