
import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

console.log(flatpickr)
const refs = {
    inputPiker:document.querySelector('input#datetime-picker'),
    btnStart:document.querySelector('button[data-start]')
}
console.log(refs.btnStart)
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };
flatpickr("#datetime-picker", {options});
const timeNow = new Date().getTime()
let selectUserTime=null;
console.log(timeNow)

refs.btnStart.disabled=true;
flatpickr(refs.inputPiker,{onClose(selectedDates){
    console.log(selectedDates[0]);
    if(selectedDates[0]<timeNow){
        alert('Please choose a date in the future')
        refs.btnStart.disabled=true;
    
    }
    else if(selectedDates[0]>timeNow){
        refs.btnStart.disabled=false;
        console.log(selectUserTime=selectedDates[0].getTime())
    }
}});

refs.btnStart.addEventListener('click', onBtnStartClick);
let differenceTime=null;
function onBtnStartClick(){
    setInterval(()=>{
        console.log('click')
        differenceTime=selectUserTime-timeNow;
    },1000)
}
function convertMs(ms) {
    // Number of milliseconds per unit of time
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
  }