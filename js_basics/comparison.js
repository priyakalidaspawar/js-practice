console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1); //true
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false...here null will converted into 0 hence null>=0 is true bcz 0>=0
console.log(null >= 0); //true

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

console.log("2" == 2); // true
console.log("2" === 2); //flase bcz === checks strictly so string is not equal to number so the o/p is false