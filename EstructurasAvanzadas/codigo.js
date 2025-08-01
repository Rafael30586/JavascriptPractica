// Estructuras avanzadas

//Arrays avanzados

// - Métodos funcionales

// forEach

let numbers = [1,2,3,4,5,6]

numbers.forEach(number => console.log(number))

// map

let doubled = numbers.map(number=>number*2)

console.log(doubled)

// filter

let evenNumbers = numbers.filter(number=> number % 2 === 0)
console.log(evenNumbers)

// reduce

let sum = numbers.reduce((previous,current) => previous + current) //Va sumando los números: 1 + 2 = 3, 3(previous) + 3(current) = 6, 6(previous) + 4(current) = 10, 10(previous) + 5(current) = 15, 15(previous) + 6(current) = 21
console.log(sum)

// - Manipulación

// flat

let nestedArray = [1,[2,[3,[4]]]]

let flatArray = nestedArray.flat(1) // El argumento que se le pasa es la profundidad con la que queremos que actúe
console.log(flatArray)
flatArray = nestedArray.flat(2)
console.log(flatArray)
flatArray = nestedArray.flat(3)
console.log(flatArray)

// flatMap

let phrases = ["Hola mundo", "Adiós mundo"]

let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words)

// - Ordenación

// sort

let unsorted = ["b","a","d","c"]
let sorted = unsorted.sort() // El método ordena alfabéticamente cuando se trata de un array de strings. Este es su comportamiento por defecto, pero se puede modificar
console.log(sorted)

unsorted = [3,4,1,6,10]
sorted = unsorted.sort((a,b) => a-b) // El comportamiento que tiene por defecto no sirve para ordenar bien a los números, por eso se lo puede ajustar así
console.log(sorted)

// reverse

sorted.reverse() // Este método muta el array
console.log(sorted)

// - Búsqueda

// includes

console.log(sorted.includes(4))

// find

let firstEven = sorted.find(element => element % 2 === 0)
console.log(firstEven)

// findIndex

let firstEvenIndex = sorted.findIndex(element => element % 2 === 0) 
console.log(firstEvenIndex)

// Si el método findIndex no encuentra nada, retorna -1

// Sets avanzados

// - Operaciones

// Eliminación de duplicados. Se eliminan duplicados de un array utilizando el constructor de un set pero teniendo un array como resultado gracias al spread.

const numbersArray = [1,2,2,3,4,5,6,6]
const numbersSet = [...new Set(numbersArray)]
console.log(numbersSet)

// Unión 

const setA = new Set([1,2,3])
const setB = new Set([2,3,4,5])
const union = new Set([...setA,...setB])
console.log(union)

// Intersección

const intersection = new Set([...setA].filter(element => setB.has(element)))
console.log(intersection)

// Diferencia

const difference = new Set([...setA].filter(element => !setB.has(element)))
console.log(difference)

// Conversión de Sets

console.log([...setA])

// - Iteración de Sets 

// forEach

setA.forEach(element => console.log(element))

// Maps avanzados

let myMap = new Map([
    ["Nombre", "Rafael"],
    ["Edad",39]
])

console.log(myMap)

myMap.forEach((key,value) => console.log(key, ": ",value))

// - Conversión de maps

// Map a array

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)

// Map a objeto

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

// Objeto a Map

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

// 4. Ordena un array de números de mayor a menor

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

// 6. Itera los resultados del ejercicio anterior

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

// 8. Dado el mapa anterior, crea un array con los nombres

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

/*Ejercicio 1 */

let palabras = ["manzana", "coche", "cielo", "árbol", "mar"]
let palabrasEnMayuscula = palabras.map(palabra=>palabra.toUpperCase())
console.log(palabrasEnMayuscula)

let alimentos = ["queso","orégano","sal","naranja","nuez","tomate"]
let alimentosQueEmpiezanConN = alimentos.filter(alimento=>alimento.startsWith("n"))
console.log(alimentosQueEmpiezanConN)

let cadenaDeAlimentos = alimentos.reduce((previous,current)=>current.concat(previous))
console.log(cadenaDeAlimentos)

// Ejercicio 2

let numeros = [32,10,71,20,45]
let numerosElevadosAlCubo = numeros.map(numero=>numero*numero*numero)
let numerosElevadosAlCuboPares = numerosElevadosAlCubo.filter(numero=>numero % 2 === 0)

// Ejercicio 3

let marcasDeAutos = ["Fiat",["Renault"],"Audi",["Mercedes Benz"]]
let marcasDeAutos2 = marcasDeAutos.flat(1)
console.log(marcasDeAutos2)

let paises = ["   Argrentina"," Austria ","  Congo "," Uruguay  ","  Alemania "]
let paises2 = paises.flatMap(pais => pais.trim())
console.log(paises2)

// Ejercicio 4

let masNumeros = [56,10,92,30,87]
masNumeros.sort((a,b)=> b-a)
console.log(masNumeros)

