var canvas = document.getElementById("canvas");
var contexto = canvas.getContext("2d");
var boton =document.getElementById("inicio");
var vidas = 3;
var puntaje = 0;
var nivel = 1;

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

function moverBarra(){
    
    if(barra.derecha && barra.posX < canvas.width - barra.ancho){
        
         barra.posX += barra.velocidad;
        
    }
    
    if(barra.izquierda && barra.posX >0 ){
        
         barra.posX -= barra.velocidad;
        
    }
    
}

function dibujarBarra(){
    
    contexto.drawImage(barra.img, barra.posX, barra.posY);
    
}

barra.img.src = "Imagenes/barra.PNG";

//Fin barra jugador


//Bolita

var bolita= {
    
    posX : canvas.width/2,
    posY : canvas.height/2,
    radio : 8,
    direccionX : 2, 
    direccionY : 2,
    color: "yellow"
};

function dibujarBolita(){
    
    contexto.fillStyle = bolita.color;
    contexto.beginPath();
    contexto.arc(bolita.posX, bolita.posY, bolita.radio, 0, Math.PI*2);
    contexto.fill();
    
}

function moverBolita(){
    
    bolita.posX += bolita.direccionX;
    bolita.posY += bolita.direccionY;
    
}

//Fin bolita

function dibujarInformacion(){
    
    contexto.fillStyle = "red";
    contexto.fillText("vidas restantes: "+ vidas, 5, 10);
    contexto.fillText("Nivel: "+ nivel, canvas.width-50, 10);
}

function dibujarTablero(){
    
    contexto.clearRect(0,0,canvas.width,canvas.height);
    dibujarBolita();
    dibujarBarra();
    dibujarInformacion();
    
}

function actualizar(){
    
    moverBarra();
    moverBolita();
    
}

function choques(){
    
    if(bolita.posX <= bolita.radio || bolita.posX >= canvas.width - bolita.radio){
        
        bolita.direccionX = -bolita.direccionX; 
        
    }
    
    if(bolita.posY <=0){
        
        bolita.direccionY = -bolita.direccionY; 
        
    }
    
    if(bolita.posY >= canvas.height - bolita.radio){
        
        bolita.direccionY = -bolita.direccionY;
        
        if(!(bolita.posX > barra.posX && bolita.posX < barra.posX + barra.ancho)){
            
            perderVida();
            
        }
        
    }
    
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

function perderVida(){
    
    if(vidas >0){
        
        alert("Haz perdido una vida");
        vidas--;
        
    } else {
        
        alert("Game over");
        finalizarJuego();
        
    }
    
}

function finalizarJuego(){
    
    document.location.reload();
    
}