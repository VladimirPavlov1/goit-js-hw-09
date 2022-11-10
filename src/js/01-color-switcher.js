const refs = {
    startBtn:document.querySelector('button[data-start]'),
    stoptBtn:document.querySelector('button[data-stop]'),
    bodyEl:document.querySelector('body'),
}
console.log(refs)
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  refs.startBtn.addEventListener('click',onStartBtnClick);
  refs.stoptBtn.addEventListener('click', onStopBtnClick);
  let intervalId=null;
  console.dir(refs.startBtn)
  
  function onStartBtnClick(){
    intervalId=setInterval(()=>{
    refs.bodyEl.style.backgroundColor=getRandomHexColor();
    console.log('click');
    refs.startBtn.disabled = true},1000);
  }

  function onStopBtnClick(){
    console.log("тиць")
    clearInterval(intervalId);
    refs.startBtn.disabled = false
  }
