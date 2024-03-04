// While Loop

// while (condition) {
    
// }

let index = 1
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

// Do while Loop
let score = 11

do {
    console.log(`Score is ${score}`);// 1...11 but if score = 11 then still first 11 will printed  and then loop will end beacuse of condition
    score++
} while (score <= 10);