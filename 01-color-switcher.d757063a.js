!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=document.querySelector("body");e.addEventListener("click",(function(n){t=setInterval((function(){return o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e.disabled=!0})),n.addEventListener("click",(function(n){clearInterval(t),e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.d757063a.js.map
