"use strict"
//CARRUSEL CON ANIMACION


//funcion para botones derecha en carrusel
let i=0;
let btnsDerecha =document.querySelector('.btn-derecha');

let cards=document.querySelectorAll(".card");
  
btnsDerecha.addEventListener("click", ()=> {

  cards.forEach(card => {
    card.classList.remove("animacionCards");
  });

    if(i==0){
      i++;
      btnsDerecha.nextElementSibling.style.transform =`translateX(${-50}%)`;
      cards[4].classList.add("animacionCards");
      cards[5].classList.add("animacionCards");
      cards[6].classList.add("animacionCards");
      cards[7].classList.add("animacionCards");
    }else if(i==1){
      i--;
      btnsDerecha.nextElementSibling.style.transform =`translateX(${-0}%)`;
      cards[0].classList.add("animacionCards");
      cards[1].classList.add("animacionCards");
      cards[2].classList.add("animacionCards");
      cards[3].classList.add("animacionCards");
    }
    }
);


//funcion para botones izquierda carrusel
let btnsIzquierda =document.querySelector('.btn-izquierda');
  btnsIzquierda.addEventListener("click", ()=> {

    cards.forEach(card => {
      card.classList.remove("animacionCards");
    });
    if(i==0){
      i=1;     
      btnsIzquierda.nextElementSibling.nextElementSibling.style.transform =`translateX(${-50}%)`;
      cards[4].classList.add("animacionCards");
      cards[5].classList.add("animacionCards");
      cards[6].classList.add("animacionCards");
      cards[7].classList.add("animacionCards");
    }else if(i==1){
        i=0;
        btnsIzquierda.nextElementSibling.nextElementSibling.style.transform =`translateX(${-0}%)`;
        cards[0].classList.add("animacionCards");
        cards[1].classList.add("animacionCards");
        cards[2].classList.add("animacionCards");
        cards[3].classList.add("animacionCards");
    }
  }
  );

