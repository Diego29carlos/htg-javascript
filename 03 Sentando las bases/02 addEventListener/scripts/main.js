'use strict';

const formulario = document.querySelector('#contacto');
const inputNombre = document.querySelector('#input-nombre');

function recibirNombre(event) {
  event.preventDefault();
  console.log(event);
}

function interceptarNombre(event) {
  console.log(event.target.value);
  const nombre = event.target.value;
if (nombre.length < 5 || nomnbre.length > 50){
  console.log ("no es valido");
} else {
  console.log("Es valido");
}

}

formulario.addEventListener('submit', recibirNombre);
inputNombre.addEventListener('input', interceptarNombre);
