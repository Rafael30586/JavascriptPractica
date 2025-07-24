// Estructuras avanzadas

//Arrays avanzados

// -Métodos funcionales

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