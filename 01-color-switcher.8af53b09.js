!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");e.addEventListener("click",(function(){e.disabled=!0,o=setInterval(a,1e3)})),n.addEventListener("click",(function(){e.disabled=!1,clearInterval(o)}));var o=null;function a(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}}();
//# sourceMappingURL=01-color-switcher.8af53b09.js.map