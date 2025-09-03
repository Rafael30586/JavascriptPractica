let personajes = ["Mario", "Samus", "Link", "Marcus", "Cloud"]

let masPersonajes = [...personajes,"Ganondorf","Kirby"]  //Array spreading

let juego = {
    nombre: "Sonic 2",
    desarrollador: "Sega",
    precio: 60
}

let juegoCompleto = { // Object spreading
    ...juego,
    genero: "Plataformas"
}

let nintendo = "Nintendo"

let letras = [...nintendo] // El string es transformado en un array de letras



