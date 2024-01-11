/*let url = "localhot:8080/obras/editada?id=";
let urlCompleta;
let botonEnviar = document.getElementById("botonEnviar");
let obraSeleccionada = document.getElementById("selectObra"); //con .value accedo al elemento seleccionado
let inputTitulo = document.getElementById("inputTitulo"); //.value
let inputLanzamiento = document.getElementById("inputLanzamiento"); //.valueAsNumber
let selectClasificacion = document.getElementById("selectClasificacion"); //value
let obraObjeto = {};
let obraJSON;*/


/*
function saludar(){
    alert("Hola mundo");
}

function armarJSON(){
    obraObjeto = {
    id:null,titulo:inputTitulo.value,anioLanzamiento:inputLanzamiento.valueAsNumber,
    clasificacion:selectClasificacion.value,   
    }

    obraJSON = JSON.stringify(obraObjeto); //JSON.parse revierte este proceso si se aplica a obraJSON
    console.log(obraJSON);
    console.log(obraObjeto);
}

function armarUrl(){
    urlCompleta = url + obraSeleccionada.value;
    console.log(urlCompleta);
}

//armarJSON();

async function editarPersonaje(){
    armarJSON();
    armarUrl();
    await fetch(urlCompleta,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json',
        },body: obraJSON,
    }).then(alert("Obra editada correctamente"));
}*/


/*
botonEnviar.addEventListener("click",editarPersonaje);*/

//Habria que hacer un fetch enviando el json y usando el id de la obra como parametro para la...
//...@RequestParam del controlador