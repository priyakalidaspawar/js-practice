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
console.log(myArray); // [ 2, 3, 4, 5, 6, 7 ]
console.log(newArr); // 2,3,4,5,6,7
console.log(typeof newArr); // string