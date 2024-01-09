let botonEnviar = document.getElementById("botonEnviar");
let obraSeleccionada = document.getElementById("selectObra"); //con .value accedo al elemento seleccionado
let inputTitulo = document.getElementById("inputTitulo"); //.value
let inputLanzamiento = document.getElementById("inputLanzamiento"); //.valueAsNumber
let selectClasificacion = document.getElementById("selectClasificacion"); //value
let obraObjeto = {};
let obraJSON;

function saludar(){
    alert("Hola mundo");
}

function armarJSON(){
    obraObjeto = {
    id:0,titulo:inputTitulo.value,anioLanzamiento:inputLanzamiento.valueAsNumber,
    clasificacion:selectClasificacion.value,   
    }

    obraJSON = JSON.stringify(obraObjeto);
}

armarJSON();

botonEnviar.addEventListener("click",saludar);