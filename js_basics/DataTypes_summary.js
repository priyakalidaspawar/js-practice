//  Primitive Data Types

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

console.log(id); // Symbol(123)
console.log(anotherId); // Symbol(123)


const bigNumber = 3456543576654356754n

// Reference (Non primitive) datatype

// Array, Objects, Functions

const fruits = ["apple", "orange", "banana"]; //array
let myObj = {
    name: "hitesh",
    age: 22,
} //object

const myFunction = function(){
    console.log("Hello world"); // function 
}

console.log(typeof bigNumber); //bigint
console.log(typeof outsideTemp); //object
console.log(typeof myFunction); //function
console.log(typeof fruits); //object
console.log(typeof myObj); //object
console.log(typeof anotherId); //symbol
 
//****************************MEMORY********************************************/

// STACK(Primitive)  , Heap(Non Primitive)

let song = "abc"
let anotherSong = song
anotherSong = "xyz"

console.log(song); //abc
console.log(anotherSong); //xyz

let userOne = {
    email: "user@google.com",
    age: 20
}
let userTwo = userOne

userTwo.email = "hello@google.com"

console.log(userOne.email); //hello@google.com
console.log(userTwo.email); //hello@google.com