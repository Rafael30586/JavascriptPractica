let personajes = ["Mario", "Kirby", "Link", "Shepard"]

let [mario , kirby, verde] = personajes //Destructuring de un array
let [bigoton,,,comandante] = personajes // Los espacios vacios representan las partes del array que no queremos destructurar, en este caso serian las segunda y tercera posicion

console.log(mario)
console.log(verde)
console.log(comandante)

let juegazo = "Mass effect 2"

let [l1,l2,l3,l4] = juegazo //Destructuring de un string

console.log(l3)

let juegazo2 = {
    titulo: "The legend of Zelda Ocarina of time",
    puntaje: 10,
    desarrollador: "Nintendo"
}

let {titulo, puntaje} = juegazo2 // Destructuring de objetos. LAs variables deben llamarse igual que los atributos del objeto

console.log(titulo)