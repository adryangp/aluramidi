// Pom ----------------------------------------
function tocaSom (idElementoBotao) {
    document.querySelector(idElementoBotao).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSom;
 
     contador = contador + 1;
}
