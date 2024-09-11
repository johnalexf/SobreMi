let imagenesCarrusel = [
    {
        alt :'Javascript',
        src: './imagenes/javascript.png'  
    },
    {
        alt :'HTML',
        src: './imagenes/html.png'  
    },
    {
        alt :'CSS',
        src: '././imagenes/css.png'  
    },
    {
        alt :'PYTHON',
        src: '././imagenes/python.png'  
    }

]

let posicion = 0;
let fondoCambiante = document.getElementById("cambioImagen")

window.setInterval(function(){
    posicion = (++posicion) % imagenesCarrusel.length ;
    console.log(posicion)
    //console.log(imagenesCarrusel[posicion].src)
    fondoCambiante.setAttribute("src", imagenesCarrusel[posicion].src)
  }, 2000);

  function ATRAS(){
    posicion--;
    if(posicion == -1){posicion=imagenesCarrusel.length-1}
    console.log(posicion)
    fondoCambiante.setAttribute("src", imagenesCarrusel[posicion].src)
}


function delante(){
    posicion = (++posicion) % imagenesCarrusel.length ;
    console.log(posicion)
    //console.log(imagenesCarrusel[posicion].src)
    fondoCambiante.setAttribute("src", imagenesCarrusel[posicion].src)

}