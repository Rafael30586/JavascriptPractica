let contenedorPrincipal = document.getElementById("contenedor-principal");
let boton = document.getElementById("boton");

let div;


boton.addEventListener("click",()=>{
    div = document.createElement("DIV");
    div.setAttribute("class","caja");
    contenedorPrincipal.appendChild(div);
});

