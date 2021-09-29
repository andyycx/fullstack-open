//Arrays
const t = [1, -1, 3]

t.push(5)   //appends the number to the end of array

console.log(t.length)
console.log(t)

t.forEach(value => {    //iterator, forEach takes a function as parameter, returns undefined
    console.log(value)  
})

const t2 = t.concat(6)  //concat does not append the number to the existing array

console.log(t)
console.log(t2)

const x = [1, 2, 3]
const y = x.map(value => value * 2) //map returns a array, whereas forEach returns undefined
console.log(y)

const y2 = x.map(value => '<li>' + value + '</li>') 
console.log(y2)

const a = [1, 2, 3, 4, 5]
const [first, second, ...rest] = a  //...rest self explanatory, remaining ints collected into array called rest
console.log(first, second)
console.log(rest)

//Objects
const object1 = {
    name: 'Andy Ying',
    age: 22,
    education: 'BEng'
}
console.log(object1.name)   //access by objectName.propertyName

const fieldName = 'education'
console.log(object1[fieldName])

object1.address = 'Madrid'  //can also add properties to existing object
object1['secret number'] = 1234 //can also add by objectName['propertyName'] = propertyValue
object1['fav_food'] = 'Meat'    //without spaces, the propertyName does not appear as string
console.log(object1)

//Functions
const sum = (p1, p2) => {   //arrow function
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sum(1, 3)
console.log(result)

const square = p => {   //if only 1 param, no need for parentheses
    console.log(p)
    return p * p
}

const square2 = p => p * p  //if only 1 expression within function, no need for brackets
const b = [1, 2, 3, 4, 5]
const bSquared = b.map(p => square2(p))
console.log(bSquared)

function product(a, b) {    //function declaration
    return a * b
}

const average = function(a, b) {    //function expression
    return (a + b) / 2
}

//This
const andy = {
    name: 'Andy Ying',
    age: 22,
    education: 'BEng',
    greet: function() {
        console.log('Hi, my name is ' + this.name)  //this refers to the object itself
    }
}
andy.greet()
andy.growOlder = function () {
    this.age += 1
}
andy.growOlder()
console.log(andy.age)

//Classes
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greetings() {
        console.log('Hi, I\'m ' + this.name)
    }
}

const lucy = new Person('Lucy', 19)
lucy.greetings()