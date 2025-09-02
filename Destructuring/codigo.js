let personajes = ["Mario", "Kirby", "Link", "Shepard"]

let [mario , kirby, verde] = personajes //Destructuring de un array
let [bigoton,,,comandante] = personajes // Los espacios vacios representan las partes del array que no queremos destructurar, en este caso serian las segunda y tercera posicion
let [fontanero, ...losOtros] = personajes // El operador rest sirve para destructurar arrays, en este caso, es un array formado por el resto de los personajes

console.log('Mario: ',mario)
console.log('Verde: ',verde)
console.log('Comandante',comandante)
console.log('Los otros: ',losOtros)

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

let juegazo3 = {
    titulo: "Final Fantasy XII",
    puntaje: 10,
    desarrollador: "Square-enix"
}

let {titulo: titulo3, ...elResto} = juegazo3 // El operador rest sirve también para destructurear objetos, en este caso forma un objeto con las otras propiedades distintas a titulo

console.log('Título 3: ',titulo3)
console.log('El resto: ', elResto)