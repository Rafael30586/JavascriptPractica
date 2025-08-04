// Objetos avanzados

// - Prototipos y herencia

// Prototipos

person = {
    name: "Brais",
    age: 37,
    greet(){
        console.log(`Hola, soy ${this.name}`)
    }
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

person.sayAge = function(){
    console.log(`Tengo ${this.age} años`)
}

console.log(person)
person.sayAge()

