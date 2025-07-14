function greet(name){
    console.log(`Hello ${name}`)
}

function processGreeting(greetingFunction, name){
    greetingFunction(name)
}

processGreeting(greet,"Rafael") // A una función se le puede pasar otra función como argumento


function returnGreeting(){ // Una función puede retornar otra función
    return function(){
        console.log("Hello")
    }
}

// Funciones flecha

const multiply = (a,b) => a * b // A esto se le llama retorno implícito
console.log(multiply(16,2))

const handler = {
    name: "Link",
    greeting: function(){
        console.log(`Hola ${this.name}`) // A esto se le llama this léxico
    },
    arrowGreeting: ()=>{
        console.log(`Hola ${this.name}`) // En este caso no funciona porque la función flecha crea su propio contexto
    }
}

handler.greeting()
handler.arrowGreeting();

//IIFE (Expresiòn de funciòn invocada inmediatamente)

(function(){ // Esta función se invoca inmediatamente y funciona solamente si colocamos un ; en la línea anterior y posterior a esta función
    console.log("IIFE clásico")
})();

(()=>{
    console.log("IIFE con función flecha")
})();

// Parámretros rest

function sum(...numbers){ // Cuando se llama a la función se puede agregar tantos argumentos como  queramos y con ellos se generará un array
    let suma = 0
    for(number of numbers){
        suma += number
    }
    console.log(suma)
}

sum(5,10,3)

//Operador spread

const numbers = [1,2,3]
const moreNumbers = [4,1,8,3,9]
const lessNumbers = [3,7]

function sumWithSpread(a,b,c){
    return a + b + c
}

console.log(sumWithSpread(45,1,29)) // Sin spread
console.log(sumWithSpread(...numbers)) //Con spread. 
console.log(sumWithSpread(...moreNumbers)) // Realiza la suma con los tres primeros elementos del array
console.log(sumWithSpread(...lessNumbers)) // Da error (NaN)