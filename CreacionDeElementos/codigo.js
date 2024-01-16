let div = '<div class="divCreado"></div>'; 
let boton = '<button id="botonCreado"></button>';
let contenedor = document.querySelector(".contenedor");
let contenedor2 = document.querySelector(".caja");
let input = document.createElement("input");

console.log(div);
console.log(contenedor);

contenedor.innerHTML = div;
//contenedor.outerHTML = boton;
contenedor2.appendChild(input);

