let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTO_GATO=50;
const ANCHO_GATO=50;
const ALTO_COMIDA=50;
const ANCHO_COMIDA=50;

let gatoX = ANCHO_GATO;
let gatoY= ALTO_GATO;
let comidaX = ANCHO_COMIDA;
let comidaY = ALTO_COMIDA;

function iniciarJuego(){
graficarGato();
graficarComida();

}

function graficarGato(){
    ctx.fillStyle="blue";
    ctx.fillRect(230,230,gatoX,gatoY);

}

function graficarComida(){

    ctx.fillStyle="orange";
    ctx.fillRect(450,450,comidaX,comidaY);

}