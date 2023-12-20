let boton = document.getElementById("boton");
let color1 = document.getElementById("color1");
/*let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let color4 = document.getElementById("color4");
let color5 = document.getElementById("color5");*/
let body = document.getElementById("body");

function colorearFondo(){
    body.style.backgroundColor = color1.value;
}

console.log(color1);
console.log(color1.value);

boton.addEventListener("click",colorearFondo);