const favorito =document.querySelector("comment");

for(let i = 0; i<favorito.length;i++){

    if(i=favorito.length-2){
        favorito[i].classList.add("favorito");
    }
}