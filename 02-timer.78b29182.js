!function(){var t={date:document.querySelector("#datetime-picker"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]"),start:document.querySelector("[data-start]"),tooltip:document.querySelector(".tooltip")},e=null;function a(){var e=new Date(t.date.value)-new Date;console.log(e),t.days.textContent=n(Math.floor(e/864e5%30)),t.hours.textContent=n(Math.floor(e/36e5%24)),t.minutes.textContent=n(Math.floor(e/6e4%60)),t.seconds.textContent=n(Math.floor(e/1e3%60))}function n(t){return String(t).padStart(2,"0")}t.date.addEventListener("change",(function(){(new Date(t.date.value)<new Date||""==t.date.value)&&(t.start.setAttribute("disabled",!0),t.days.textContent="00",t.hours.textContent="00",t.minutes.textContent="00",t.seconds.textContent="00",t.tooltip.classList.remove("hidden")),""==t.date.value&&t.tooltip.classList.add("hidden"),new Date(t.date.value)>new Date&&t.start.removeAttribute("disabled"),clearInterval(e)})),t.start.addEventListener("click",(function(){new Date(t.date.value)<new Date||""==t.date.value?t.start.setAttribute("disabled",!0):(t.start.setAttribute("disabled",!0),t.tooltip.classList.add("hidden"),e=setInterval(a,1e3))}))}();
//# sourceMappingURL=02-timer.78b29182.js.map
