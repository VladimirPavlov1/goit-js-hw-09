const refs ={
  formEl:document.querySelector('.form'),
  delayEl:document.querySelector('.js-delay'),
  stepEl:document.querySelector('.js-step'),
  amountEl:document.querySelector('.js-amount'),
  submitEl:document.querySelector('.js-submit'),
}
console.log(refs)

const userDelay = 0;

const userStep =0;

userAmount=0;



// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
  
//   setTimeout
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });