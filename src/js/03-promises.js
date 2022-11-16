const refs ={
  formEl:document.querySelector('.form'),
  delayEl:document.querySelector('.js-delay'),
  stepEl:document.querySelector('.js-step'),
  amountEl:document.querySelector('.js-amount'),
  submitEl:document.querySelector('.js-submit'),
}
console.log(refs)

refs.formEl.addEventListener('submit',onFormSubmit)


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3
 
  setTimeout(() => {
  shouldResolve ? resolve({position, delay}) : reject({position, delay})
         }, delay)
     })
} 
  
function onFormSubmit(evt){
  evt.preventDefault();
  let delay = Number(refs.delayEl.value)
  const amount = Number(refs.amountEl.value)
  const step = Number(refs.stepEl.value)
  for(let i = 1; i <= amount; i += 1) {
    createPromise(i, delay).then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
              })
              .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
              });
    delay=delay+step;
  }
} 


console.log('hello')