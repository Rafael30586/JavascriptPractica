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
    //console.log(suma)
    return suma
}

console.log(sum(5,10,3))

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

// Closures

function createCounter(){
    let counter = 0
    return function(){
        counter++
        console.log(`Counter: ${counter}`)
    }
}

const counter = createCounter()
counter() // Cada vez que llamo a esta función aumenta el valor de la variable que está dentro de la función externa. Su valor no se pierde porque se guarda en la const counter
counter()
counter()

const counter2 = createCounter() // Se crea una nueva variable counter en la const counter2
counter2()
counter2()
counter2()
counter2()

//Recursividad

function factorial(n){
    if(n==1){
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5))

// Funciones parciales

function parcialSum(a){
    return function(b,c){
        return sum(a,b,c)
    }
}

const sumWith = parcialSum(4) // El 4 pasado como argumento queda almacenado en la variable sumWith.  
console.log(sumWith(2,3))
console.log(sumWith(1,2))

// Currying

function currySum(a){
    return function(b){
        return function(c){
            return sum(a,b,c)
        }
    }
}

const sumAB = currySum(4)(8)
console.log(sumAB(5))
console.log(sumAB(10))
