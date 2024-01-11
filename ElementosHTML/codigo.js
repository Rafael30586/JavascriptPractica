let boton = document.getElementById("boton");
let color1 = document.getElementById("color1");
/*let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let color4 = document.getElementById("color4");
let color5 = document.getElementById("color5");*/
let body = document.getElementById("body");
let botonRecarga = document.getElementById("botonRecarga");
let botonRecarga2 = document.getElementById("botonRecarga2");
let botonRecarga3 = document.getElementById("botonRecarga3");
let botonRecarga4 = document.getElementById("botonRecarga4");
let botonColorear = document.getElementById("botonColorear");
let cosas = document.getElementById("cosas");

function colorearFondo(){
    body.style.backgroundColor = color1.value;
}

function colorearFondo2(){
    setTimeout(()=>{colorearFondo()},2000);
}

function recargarPagina(){
    location.reload();
}

function recargarPagina2(){
    location.replace(); //en la consola dice que requiere un argumento
}

function recargarPagina3(){
    location.reload(true); //borra la informacion de los inputs cuando recarga
}

function recargarPagina4(){
    setTimeout(()=>{location.reload();},2000);
}



console.log(color1);
console.log(color1.value);

alert(cosas.value);

boton.addEventListener("click",colorearFondo);
botonRecarga.addEventListener("click",recargarPagina);
botonRecarga2.addEventListener("click",recargarPagina2);
botonRecarga3.addEventListener("click",recargarPagina3);
botonRecarga4.addEventListener("click",recargarPagina4);
botonColorear.addEventListener("click",colorearFondo2);
cosas.addEventListener("change",recargarPagina);