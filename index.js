function hello () {
    console.log(`Hello ${this}`)
}

hello()

const person = {
    name: `Ruslan`,
    age: 33,
    sayHello: hello,
    infoLog: function(){
        console.log(`Name person: ${this.name}, age = ${this.age}`)
    }
}

person.infoLog() // Show name and age person

const person2 = {
    name: "Kristina",
    age: 31
}

person.infoLog.bind(person2)()