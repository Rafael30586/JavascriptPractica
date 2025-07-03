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