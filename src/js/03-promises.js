const refs ={
  formEl:document.querySelector('.form'),
  delayEl:document.querySelector('.js-delay'),
  stepEl:document.querySelector('.js-step'),
  amountEl:document.querySelector('.js-amount'),
  submitEl:document.querySelector('.js-submit'),
}
console.log(refs)

// Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) стільки разів, скільки ввели в поле amount. Під час кожного виклику передай їй номер промісу (position), що створюється, і затримку, враховуючи першу затримку (delay), введену користувачем, і крок (step).


refs.formEl.addEventListener('submit',onFormSubmit)

function onFormSubmit(evt){
  evt.preventDefault();
  promise.then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}


function createPromise(position, delay) {
  
  let i=0;i<=Number(refs.amountEl.value);i+=1;
  position=i+1;
  delay=Number(refs.delayEl.value)+i*Number(refs.delayEl.value);

  const promise = new Promise((resolve,reject)=>{
  const shouldResolve = Math.random() > 0.3;
  
    setTimeout(()=>{
      if (shouldResolve) 
      resolve('ok'),
      reject('not ok')
    },delay)

  return promise
  
})
}
