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
handler.arrowGreeting()