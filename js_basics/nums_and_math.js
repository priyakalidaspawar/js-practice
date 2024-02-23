const num = 400
// console.log(num); // 400

const score = new Number(100)
// console.log(score); // [Number: 100]

// console.log(score.toString()); // 100 number converted into string but the o/p is 100 . Now we can apply string properties on number
// console.log(score.toString().length); // 3
// console.log(score.toFixed(2)); // 100.00 

const otherNum = 45.8789
// console.log(otherNum.toPrecision(3)); // 45.9
// console.log(otherNum.toPrecision(2)); // 46

// const balance = 542.8976
// console.log(balance.toPrecision(3)); // 543
// console.log(balance.toPrecision(4)); // 542.9
// console.log(balance.toPrecision(5)); // 542.90

const value = 1000000
// console.log(value.toLocaleString()); // 1,000,000
// console.log(value.toLocaleString('en-IN')); // 10,00,000

// ***********************MATHS**************************
// Math-> by default library in js

// console.log(Math);//Object [Math] {}
// console.log(Math.abs(-4)); // 4 - to +
// console.log(Math.abs(4)); // 4

// console.log(Math.round(4.3)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.3)); // 5 upper value
// console.log(Math.floor(4.3)); // 4 lower value
// console.log(Math.floor(4.9)); // 4

// console.log(Math.pow(2,3)); // 8
// console.log(Math.sqrt(81)); // 9

// console.log(Math.min(8,2,9,4,5)); // 2
// console.log(Math.max(8,2,9,4,5)); // 9

// console.log(Math.random()); // gives random value each time which lies between 0 and 1
// console.log(Math.random()*10); 
// console.log(Math.random()*10 + 1); // cz random value lies between 0 and 1 and if we multiply it by 10 and if random value generated 0 then ther is no point to multiply by 10 so adding 1 in it 
// console.log((Math.random()*10)  +  1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // 10 to 20




