let animal = document.getElementById("rinoceronte");
let despedida = document.getElementById("chau");
let botonGrande = document.getElementById("botonaso");
let textNode = document.createTextNode("Avion");
let botonsito = document.getElementById("botonsito");
let botonsuelo = document.getElementById("botonsuelo");
let textNode2 = document.createTextNode("Barco");
let panel = document.getElementById("panelBotones");
let botonsin = document.getElementById("botonsin");


function cambiarColor(){
	alert("Hola");
}

function insertarTexto(){
	animal.appendChild(textNode);
}

function insertarTexto2(){
	animal.appendChild(textNode2);
}

function darAtributo(){
	panel.setAttribute("name","hola");

}

botonGrande.addEventListener('click',cambiarColor);
botonsito.addEventListener('click',insertarTexto);
botonsuelo.addEventListener('click',insertarTexto2);
botonsin.addEventListener('click',darAtributo);