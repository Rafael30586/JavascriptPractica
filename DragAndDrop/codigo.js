let contenedor1 = document.getElementById("contenedor1");

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