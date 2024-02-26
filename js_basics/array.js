//*****************ARRAY***********/

//array=> resizable and can contain a mix of different data types

const myArray = [2,3,4,5,6,7]
// console.log(myArray); // [ 2, 3, 4, 5, 6, 7 ]
// console.log(myArray[4]); // 6
// console.log(myArray.length); // 6

//Array methods

myArray.push(8)
// console.log(myArray);//  [ 2, 3, 4, 5, 6, 7,8 ]
myArray.pop()
// console.log(myArray); // [ 2, 3, 4, 5, 6, 7 ]

// myArray.unshift(8)
// console.log(myArray); // [ 8, 2, 3, 4, 5, 6, 7 ]
// myArray.shift()
// console.log(myArray);  // [ 2, 3, 4, 5, 6, 7 ]

// console.log(myArray.includes(9)); // false
// console.log(myArray.indexOf(6)); // 4

const newArr = myArray.join()
// console.log(myArray); // [ 2, 3, 4, 5, 6, 7 ]
// console.log(newArr); // 2,3,4,5,6,7
// console.log(typeof newArr); // string

// slice, splice

console.log("A ", myArray);// A  [ 2, 3, 4, 5, 6, 7 ]

const myn1 = myArray.slice(1, 3) // [ 3, 4 ]

console.log(myn1); // [ 3, 4 ]
console.log("B ", myArray); // B  [ 2, 3, 4, 5, 6, 7 ]


const myn2 = myArray.splice(1, 3)
console.log("C ", myArray); // C  [ 2, 6, 7 ]
console.log(myn2); // [ 3, 4, 5 ]