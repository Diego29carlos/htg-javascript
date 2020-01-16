/*
function favorito (comentario)

for(let i = 0; i<favorito.length;i++) {

    if(favorito[i].classList.add("favorito");

    {
    }
}*/

const comentarios = document.querySelectorAll(".comment--text");


for(let i = 0; i<comentarios.length; i++){
    if(comentarios[i] === comentarios[1]){
        comentarios[i].classList.add("commentjeny")
    }
        
}

const caja2 = document.querySelectorAll("hr");
   
  for(let i= 0; i< caja2.length; i++){
      caja2[i].classList.add("cajahr")
  }




  for(let i= 0; i<comentarios.length; i++){
      if(comentarios[i].innerText.length > 50){
        comentarios[i].classList.add("mayor");
      }

  }


for(let i= 0; i< comentarios.length; i++){
    if (comentarios[i] === comentarios[0]){
        comentarios[i].classList.add("commetlargo")
    }
}


/*
array.length : cantidad de bloques que tiene

array[n]: lo que tiene cada bloque n

array[n].innerText: te devuelve lo que tiene dentro


*/ 

