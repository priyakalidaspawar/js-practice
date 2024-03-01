function sayHello(){
    console.log("H");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
    console.log("!");
}

sayHello()// sayHello->function reference , sayHello()->function execution

function addTwoNumbers(number1, number2){// number1 and number2 are parameters

    console.log(number1 + number2);
}
addTwoNumbers(3,5) // 8  here 3 and 5 are arguments

function addTwoNumbers(number1, number2){ 

    let result = number1 + number2
    return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);// Result:  8


function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Priya")) // Priya just logged in
console.log(loginUserMessage("")) //  just logged in
console.log(loginUserMessage()) // undefined just logged in

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage()) // sam just logged in
console.log(loginUserMessage("Priya")) // Priya just logged in


function calculateCartPrice(num){
    return num
}
console.log(calculateCartPrice(100)) // 100

function calculateCartPrice(...num){ // ... ->Rest operator
    return num
}
console.log(calculateCartPrice(100,200,300)) // [ 100, 200, 300 ]

const user = {
    name: "max",
    age: 18
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`);
}
handleObject(user) // Username is max and age is 18
handleObject({
    name: "sam",
    age: 20
}) // Username is sam and age is 20

const newArray = [10,20,30,40]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(newArray));// 20
console.log(returnSecondValue([10,20,30,40])); // 20