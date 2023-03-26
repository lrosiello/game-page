"use strict"
//Funcion menu hamburguesa icono cruz
let burguer=document.querySelector('#burguer');

burguer.addEventListener('click', e=>{
    burguer.classList.toggle('active');
})


//Funcion header sticky
window.onscroll = function() {
  stickyHeader();
  mostrarAlScrollear();
};

var header = document.querySelector(".header");

var menu=document.querySelector(".menu")

var logo=document.querySelector(".logo")

var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    menu.classList.add("sticky");
    logo.classList.add("stickyLogo");
  } else {
    header.classList.remove("sticky");
    menu.classList.add("sticky");
    logo.classList.remove("stickyLogo");
  }
}

let cardsAnimadas = document.querySelectorAll(".cardAnimada");
let carrusel = document.querySelector(".seccion-personajes");
let flag = 0;
function mostrarAlScrollear(){
  let longitud = cardsAnimadas.length;
  let ubicacionCarrusel = carrusel.offsetTop;
  let scrollTop = document.documentElement.scrollTop; //detecta lo que se scrolleo
  for(let i = 0; i<longitud; i++) {
    if(((ubicacionCarrusel +300) < scrollTop)&& i<4){
      switch(i){
        case 0:
          cardsAnimadas[i].classList.add("cardVolando1");
          break;
        case 1:
          cardsAnimadas[i].classList.add("cardVolando2");
          break;
        case 2:
          cardsAnimadas[i].classList.add("cardVolando3");
          break;
        case 3:
          cardsAnimadas[i].classList.add("cardVolando4");
          break;
      }
      
      
    }
  };

}



//FUNCION ANIMACION HISTORIA

let textosAnimados = document.querySelectorAll(".appear");
let buttonUp = document.querySelector(".buttonUp");
let buttonDown = document.querySelector(".buttonDown");
let count = 0;

buttonUp.addEventListener("click", ()=>{
  let texto;
  if(count>0){
    count = count -1;
  }
  
  textosAnimados.forEach(text => {
    text.classList.remove("animarScroll");
    text.classList.add("desanimarScroll");
  });

  switch(count){
    case 0:
      texto = textosAnimados[0];
      texto.classList.remove("desanimarScroll");
      texto.classList.add("animarScroll");
      break;
    case 1:
      texto = textosAnimados[1];
      texto.classList.remove("desanimarScroll");
      texto.classList.add("animarScroll");
      break;
    case 2:
      texto = textosAnimados[2];
      texto.classList.remove("desanimarScroll");
      texto.classList.add("animarScroll");
      break;
  }
})

buttonDown.addEventListener("click", ()=>{
  let texto;

  if(count<2){
    count = count +1;
  }

  textosAnimados.forEach(text => {
    text.classList.remove("animarScroll");
    text.classList.add("desanimarScroll");
  });

  switch(count){
    case 0:
      texto = textosAnimados[0];
      texto.classList.remove("desanimarScroll");
      texto.classList.add("animarScroll");
      break;
    case 1:
      texto = textosAnimados[1];
      texto.classList.remove("desanimarScroll");
      texto.classList.add("animarScroll");
      break;
    case 2:
      texto = textosAnimados[2];
      texto.classList.remove("desanimarScroll");
      texto.classList.add("animarScroll");
      break;
  }
})


// TITULO PERSONAJES, ANIMACION CUANDO APARECE AL HACER SCROLL

window.addEventListener('scroll', function()  {
  let element = document.getElementById('scrollTitle');
  let features=document.getElementById('featuresTitle');
  let screenSize = window.innerHeight;
  
    if(element.getBoundingClientRect().top < screenSize) {
      element.classList.add('visible');
      features.classList.add('visible');
    } else {
      element.classList.remove('visible');
      features.classList.remove('visible');
    }
});



