const cajas = document.getElementsByClassName("contenedor");
const superCaja = document.getElementById("superContenedor");
const botonAmarillo = document.getElementById("botonAmarillo");
const boton1 = document.getElementById("boton1");



botonAmarillo.addEventListener("click",colorear);
boton1.addEventListener("click",rojear);

function colorear(){
	superCaja.setAttribute("class","amarillo");
}

function rojear(){
	for(let i=cajas.length-1;i>=0;i--){
		cajas[i].setAttribute("class","rojo");
	}
}

//superCaja.addEventListener("click",colorear());

//console.log(cajas);
/*
for(let i=0;i<cajas.length;i++){
	cajas[i].setAttribute("class","rojo");
	//console.log(i);
}*/

/*
for(let c in cajas){
	c.setAttribute("class","rojo");
	console.log(c);
}*/ //no funciona


/*
for(let c of cajas){
	console.log(c);
}*/
