
import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

console.log(flatpickr)
const refs = {
    inputPiker:document.querySelector('input#datetime-picker'),
    btnStart:document.querySelector('button[data-start]'),
    daysEl:document.querySelector('[data-days]'),
    hoursEl:document.querySelector('[data-hours]'),
    minutEl:document.querySelector('[data-minutes]'),
    secondsEl:document.querySelector('[data-seconds]'),
}
console.log(refs)
console.log(refs.daysEl.textContent);
let differenceTime=null;
let selectUserTime=null;
const timeNow = new Date().getTime()



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



function onBtnStartClick(){
    setInterval(()=>{
        const currentTime=Date.now();
        differenceTime=selectUserTime-currentTime;
        console.log(differenceTime);
       const {days, hours, minutes, seconds }=convertMs(differenceTime);
        console.log(`${days}:${hours}:${minutes}:${seconds}`)
        refs.daysEl.textContent=days;
        refs.hoursEl.textContent=hours;
        refs.minutEl.textContent=minutes;
        refs.secondsEl.textContent=seconds;
     
       
    },1000)
}

function pad(value){
    return String(value).padStart(2,'0')
}

function convertMs(ms){
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
   
    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
 