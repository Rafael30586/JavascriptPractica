let objeto = [];


async function mostrarPersonajes(){
    await fetch(`https://rickandmortyapi.com/api/character/?page=3`)
        .then((response) => response.json())  
	    .then((personajes) => {
            objeto = Object.values(personajes);
            return objeto;
        }).then((objeto) => {
            return personaje = objeto[1][12];
        }).then((personaje)=>console.log(personaje));
    
}

mostrarPersonajes();