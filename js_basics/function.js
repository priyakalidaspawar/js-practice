function sayHello(){
    console.log("H");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
    console.log("!");
}

// sayHello()// sayHello->function reference , sayHello()->function execution

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
// addTwoNumbers(3,5) // 8

function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
    // return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);// Result:  8

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"))