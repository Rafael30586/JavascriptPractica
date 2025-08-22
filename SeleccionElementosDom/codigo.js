let numeroTriangulos = 0
let numeroCirculos = 0
let numeroFlechas = 0
let numeroCruz = 0

let triangulos = document.getElementsByClassName('triangulo')
let circulos = document.getElementsByClassName('circulo')
let flechas = document.getElementsByClassName('flecha')
let cruz = document.querySelector('.cruz')
let boton1 = document.getElementById('boton1')
let boton2 = document.getElementById('boton2')
let boton3 = document.getElementById('boton3')
let boton4 = document.getElementById('boton4')


function cambiarTriangulos(){
    if(numeroTriangulos===0){
        for(let triangulo of triangulos){
            triangulo.setAttribute('pink-orchid','true')
        }
        numeroTriangulos = 1
    }else{
        for(let triangulo of triangulos){
            triangulo.removeAttribute('pink-orchid','true')
        }
        numeroTriangulos = 0
    }
}

function cambiarCirculos(){
    if(numeroCirculos===0){
        for(let circulo of circulos){
            circulo.setAttribute('sour-apple-rings','true')
        }
        numeroCirculos = 1
    }else{
        for(let circulo of circulos){
            circulo.removeAttribute('sour-apple-rings','true')
        }
        numeroCirculos = 0
    }
}

function cambiarFlechas(){
    if(numeroFlechas===0){
        for(let flecha of flechas){
            flecha.classList.add('flecha-derecha')
        }
        numeroFlechas = 1
    }else{
        for(let flecha of flechas){
            flecha.classList.remove('flecha-derecha')
        }
        numeroFlechas = 0
    }
}

function cambiarCruz(){
    if(numeroCruz === 0){
        cruz.classList.toggle('estrella')
        numeroCruz = 1
    }else{
        cruz.classList.toggle('estrella')
        numeroCruz = 0
    }
}


boton1.addEventListener('click',cambiarTriangulos)
boton2.addEventListener('click',cambiarCirculos)
boton3.addEventListener('click',cambiarFlechas)
boton4.addEventListener('click',cambiarCruz)