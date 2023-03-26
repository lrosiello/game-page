"use strict";

let doomGuy = document.getElementById("doomguy");
let back=document.querySelector(".layer1");
let montañas=document.querySelector(".layer2");
let edificios=document.querySelector(".layer3");
let doomtitle=document.querySelector(".titleImage");   


window.addEventListener('scroll', function()  {
  var value=window.scrollY;

  doomGuy.style.top=value*0.3+'px';
  back.style.top=value*1+'px';  
  montañas.style.top=value*0.8+'px';
  edificios.style.top=value*0.5+'px'; 
  doomtitle.style.opacity = 1- + window.pageYOffset/550 + ''; 

});