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

// Herencia

let programmer = Object.create(person)
programmer.language = "Javascript"

console.log(programmer.name)
console.log(programmer.age)
programmer.greet()
programmer.sayAge()

// - Métodos estáticos y de instancia

function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.greet = function (){
    console.log(`Hola, soy ${this.name}`)
}

let new_person = new Person("Brais",37)
new_person.greet()

// - Métodos avanzados

// assign

let personCore = {name: "Brais"}
let personDetails = {age: 37, alias: "MoureDev"}

let fullPerson = Object.assign(personCore, personDetails)
console.log(fullPerson)

// keys, values, entries

console.log(Object.keys(fullPerson))
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson))

// Clases avanzadas

class Person2 {
    constructor(name,age){
        this.name = name
        this.age = age
    }

    greet(){
        console.log(`Hola, soy ${this.name}`)
    }
}

const person2 = new Person2('Brais',37)

console.log(person2)

// Clases abstractas

class Animal{
    constructor(name){
        if(new.target === Animal){
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name
    }

    makeSound(){
        throw new Error("Este método tiene que ser implementado por la subclase")
    }
}

// - Polimorfismo

class Cat extends Animal{
    makeSound(){
        console.log('miau!')
    }

}

class Dog extends Animal{
    makeSound(){
        console.log('guau!')
    }
}

const cat = new Cat('Heatcliff')
console.log(cat)
cat.makeSound()

const dog = new Dog('Angelo')
console.log(dog)
dog.makeSound()

// - Mixins

const FlyMixin = {
    fly(){
        console.log(`${this.name} está volando`)
    }
}

class Bird extends Animal {

}

class Dragon extends Animal{

}

Object.assign(Bird.prototype, FlyMixin)
Object.assign(Dragon.prototype,FlyMixin)

const bird = new Bird("MoureBird")

console.log(bird)
bird.fly()

const dragon = new Dragon("MoureDragon")

console.log(dragon.name)
dragon.fly()

// - Patrón Singleton

class Session {
    constructor(name){
        if(Session.instance){
            return Session.instance
        }
        this.name = name
        Session.instance = this
    }
}

const session1 = new Session("Brais Moure")
const session2 = new Session()
console.log(session1.name)
console.log(session2.name)
console.log(session1 === session2)

const session3 = new Session("MoureDev")
console.log(session3.name)