!function(){var t={startBtn:document.querySelector("button[data-start]"),stoptBtn:document.querySelector("button[data-stop]"),bodyEl:document.querySelector("body")};console.log(t),t.startBtn.addEventListener("click",(function(){t.startBtn.disabled=!0,o=setInterval((function(){t.bodyEl.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),console.log("click")}),1e3)})),t.stoptBtn.addEventListener("click",(function(){console.log("тиць"),clearInterval(o),t.startBtn.disabled=!1}));var o=null;console.dir(t.startBtn)}();
//# sourceMappingURL=01-color-switcher.5c76ca4b.js.map