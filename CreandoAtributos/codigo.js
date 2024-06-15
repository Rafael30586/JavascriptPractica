let cajaRoja = document.getElementById("caja-roja");
let cajaVerde = document.getElementById("caja-verde");
let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");

function colorear1(){
    if(cajaRoja.getAttribute("miatributo")=="rojo"){
        cajaRoja.setAttribute("miatributo","celeste");
    }else{
        cajaRoja.setAttribute("miatributo","rojo");
    }
    
}

function colorear2(){
    if(cajaVerde.getAttribute("miatributo")=="verde"){
        cajaVerde.setAttribute("miatributo","amarillo");
    }else{
        cajaVerde.setAttribute("miatributo","verde");
    }
    
}

boton1.addEventListener("click",colorear1);
boton2.addEventListener("click",colorear2);