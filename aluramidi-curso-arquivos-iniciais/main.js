//Funções dos botões 

function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play()

}



//QuerySelectorAll (Seleciona tudo da lista) dos botões

const listaDeTeclas = document.querySelectorAll('.tecla');





//Para
for(let contador=0; contador < listaDeTeclas.length; contador++){

  const tecla = listaDeTeclas[contador];

  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;

  //console.log( idAudio)

  tecla.onclick = function(){
    tocaSom(idAudio);
  }



tecla.onkeydown = function(evento){
   if (evento.code =  'Space') {
     tecla.classList.add('ativa');
   }
   
}


tecla.onkeyup = function(){
    tecla.classList.remove('ativa');
}


   //console.log(contador)
}
