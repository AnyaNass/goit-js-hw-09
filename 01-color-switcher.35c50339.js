const t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),body:document.querySelector("body")};let e=null;t.start.addEventListener("click",(function(){t.start.setAttribute("disabled",!0),t.stop.removeAttribute("disabled"),e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.stop.addEventListener("click",(function(){t.stop.setAttribute("disabled",!0),clearInterval(e),t.start.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.35c50339.js.map
