let videoJuegos = [];
let caja;
let contenedorPrincipal = document.getElementById("contenedor-principal");


function peticion(){

    fetch("http://localhost:8080/video-juegos/todos").then(respuesta=>{
    videoJuegos = respuesta;
    for(i=0;i<videoJuegos.length;i++){
        caja = document.createElement("DIV");
        caja.setAttribute("class","juego");
        caja.textContent(videoJuegos[i].titulo);
        contenedorPrincipal.appendChild(caja);

    }
})

}
