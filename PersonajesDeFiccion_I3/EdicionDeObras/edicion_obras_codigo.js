let url = "localhot:8080/obras"
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
    id:null,titulo:inputTitulo.value,anioLanzamiento:inputLanzamiento.valueAsNumber,
    clasificacion:selectClasificacion.value,   
    }

    obraJSON = JSON.stringify(obraObjeto); //JSON.parse revierte este proceso si se aplica a obraJSON
}

armarJSON();

botonEnviar.addEventListener("click",saludar);

//Habria que hacer un fetch enviando el json y usando el id de la obra como parametro para la...
//...@RequestParam del controlador