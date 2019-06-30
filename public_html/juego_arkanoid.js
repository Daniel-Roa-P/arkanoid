var canvas = document.getElementById("canvas");
var contexto = canvas.getContext("2d");
var boton =document.getElementById("inicio");
var vidas = 3;
var puntaje = 0;

boton.addEventListener("click",iniciarJuego);

//Barra jugador

var barra = {
    
    posX : canvas.width/2,
    posY : canvas.height-10,
    ancho : 100,
    alto: 10,
    img: document.createElement("img")
    
};

//Fin barra jugador

barra.img.src = "Imagenes/barra.PNG";

function dibujarBarra(){
    
    contexto.drawImage(barra.img, barra.posX, barra.posY);
    
}


function dibujarTablero(){
    
    contexto.clearRect(0,0,canvas.width,canvas.height);
    dibujarBarra();
}

function actualizar(){
    
    
}

function choques(){
    
    
}

function fotogramas(){
    
    actualizar();
    choques();
    dibujarTablero();
    requestAnimatonFrame(fotogramas);
}

function reproducirSonido(){
    
    
    
}

function levelUp(){
    
    
    
}

function iniciarJuego(){
    
    var modelo = document.getElementById("modelo");
    modelo.style.display = "none";
    fotogramas();
}

function finalizarJuego(){
    
    document.location.reload();
    
}