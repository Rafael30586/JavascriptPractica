let boton = document.getElementById("boton");
let color = document.getElementById("color");
let body = document.getElementById("body");

function colorearFondo(){
    body.style.backgroundColor = color.value;
}

console.log(color);
console.log(color.value);

boton.addEventListener("click",colorearFondo);