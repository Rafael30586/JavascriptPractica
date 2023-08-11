const cajas = document.getElementsByClassName("contenedor");
const superCaja = document.getElementById("superContenedor");
const botonAmarillo = document.getElementById("botonAmarillo");



botonAmarillo.addEventListener("click",colorear());

function colorear(){
	superCaja.setAttribute("class","amarillo");
}

//superCaja.addEventListener("click",colorear());

console.log(cajas);

for(let i=0;i<cajas.length;i++){
	cajas[i].setAttribute("class","rojo");
	//console.log(i);
}

/*
for(let c in cajas){
	c.setAttribute("class","rojo");
	console.log(c);
}*/ //no funciona

for(let c in cajas){
	console.log(c);
}
/*
for(let c of cajas){
	console.log(c);
}*/

for(let i=0;i<cajas.length;i++){
	console.log(cajas[i].className);
}

for(let i=0;i<cajas.length;i++){
	console.log(cajas[i]);
}