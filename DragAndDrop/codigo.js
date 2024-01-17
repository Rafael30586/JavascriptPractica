let contenedor1 = document.getElementById("contenedor1");
let contenedor2 = document.getElementById("contenedor2");

function colorear(){
    contenedor1.style.backgroundColor = "#fdd96a";
}

contenedor1.addEventListener("dragstart",colorear);
contenedor1.addEventListener("drag",()=>{
    contenedor1.style.backgroundColor = "#ca4c5a";
    contenedor1.style.borderStyle = "solid";
    contenedor1.style.borderWidth = "4px";
});

contenedor1.addEventListener("dragend",()=>{
    contenedor1.style.backgroundColor = "#87c5b6";
    contenedor1.style.borderWidth = "10px";
    contenedor1.style.borderColor = "#05cc0c";
});

contenedor2.addEventListener("dragenter",()=>{
    contenedor2.setAttribute("class",contenedor1.getAttribute("class"));
});

contenedor2.addEventListener("dragleave",()=>{ //pareece que no esta funcionando
    contenedor2.setAttribute("class","claseCualquiera");
});