let objeto = [];
let contenedorPersonaje = document.getElementById("contenedor-personaje");
let nombre = document.getElementById("nombre");
let imagen = document.getElementById("imagen");
let numeroPersonaje = Math.round(Math.random()*18);
let pagina = Math.round(Math.random()*41);


async function mostrarPersonajes(){
    await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
        .then((response) => response.json())  
	    .then((personajes) => {
            objeto = Object.values(personajes);
            return objeto;
        }).then((objeto) => {
            return personaje = objeto[1][numeroPersonaje];
        }).then((personaje)=>console.log(personaje));
    
}

//mostrarPersonajes();

async function mostrarPersonaje(){
    await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
        .then((response) => response.json())  
	    .then((personajes) => {
            objeto = Object.values(personajes);
            return objeto;
        }).then((objeto) => {
            personaje = objeto[1][numeroPersonaje];
            nombre.textContent = personaje.name;
            imagen.setAttribute("src",personaje.image);
            return personaje
        }).then((personaje)=>console.log(personaje)); 
}

mostrarPersonaje();