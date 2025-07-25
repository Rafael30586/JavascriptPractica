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