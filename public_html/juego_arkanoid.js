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
    img: document.createElement("img"),
    derecha: false,
    izquierda: false,
    velocidad:6
    
};

document.addEventListener("keydown", function(){
    
    if(event.keyCode === 37){
        
        barra.izquierda=true;
        
    }
    
    if(event.keyCode === 39){
        
        barra.derecha=true;
        
    }
    
});

document.addEventListener("keyup", function(){
    
    if(event.keyCode === 37){
        
        barra.izquierda=false;
        
    }
    
    if(event.keyCode === 39){
        
        barra.derecha=false;
        
    }
    
});

//Fin barra jugador

barra.img.src = "Imagenes/barra.PNG";

function dibujarBarra(){
    
    contexto.drawImage(barra.img, barra.posX, barra.posY);
    
}

function moverBarra(){
    
    if(barra.derecha && barra.posX < canvas.width - barra.ancho){
        
         barra.posX += barra.velocidad;
        
    }
    
    if(barra.izquierda && barra.posX >0 ){
        
         barra.posX -= barra.velocidad;
        
    }
    
}

function dibujarTablero(){
    
    contexto.clearRect(0,0,canvas.width,canvas.height);
    dibujarBarra();
    
}

function actualizar(){
    
    moverBarra();
   
}

function choques(){
    
    
}

function fotogramas(){
    
    actualizar();
    choques();
    dibujarTablero();
    requestAnimationFrame(fotogramas);
    
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