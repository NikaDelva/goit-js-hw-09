!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),a=null;r.setAttribute("disabled",!0),e.addEventListener("click",(function(){e.setAttribute("disabled",!0),r.removeAttribute("disabled",!0),a=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),r.addEventListener("click",(function(){e.removeAttribute("disabled",!0),r.setAttribute("disabled",!0),clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.f2b5462d.js.map
