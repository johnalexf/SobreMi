let imagenesCarrusel = [
    {
        alt :'Javascript',
        src: '././imagenes/javascript.png'  
    },{
        alt :'HTML',
        src: '././imagenes/icons8-javascript-480.png'  
    },
    {
        alt :'CSS',
        src: '././imagenes/icons8-javascript-480.png'  
    },
    {
        alt :'PYTHON',
        src: '././imagenes/icons8-javascript-480.png'  
    }

]

let posicion=0;

function ATRAS(){
    posicion--;
}

function DELANTE(){
    posicion = posicion++ % imagenesCarrusel.length;
    let imagen = document.createElement(imagenesCarrusel[posicion])
    document.getElementById("prueba2").appendChild(imagen);


}