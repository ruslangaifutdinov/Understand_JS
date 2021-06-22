function sayHello() {
    console.log(`say hello ${this}`)
}

//sayHello()

const person = {
    name: "Ruslan",
    age: 25,
    helloFromPerson: sayHello,
    helloAgain: function(){
        console.log(`This person name: ${this.name}`)
        console.log(`This person age: ${this.age}`)
    }
}

person.helloAgain()

const gamer = {
    name: "Ruslan",
    age: 33
}

person.helloAgain.bind(gamer)()

let array = [1,2,3,4,5]

Array.prototype.multBy = function(n) {
    return this.map(function(i){
        return i * n
    })
}
console.log(array.multBy(2))