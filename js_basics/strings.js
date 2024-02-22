const name = "abc"
const repoCount = 50

// console.log(name + repoCount + " hii");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('hellllooo-hi-com')

// console.log(gameName[0]); //h
// console.log(gameName.__proto__); // {}
// console.log(gameName.length); // 9
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(8)); // o
// console.log(gameName.indexOf('e')); // 1

// const newString = gameName.substring(0, 4)
// console.log(newString); // hell

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString); //ell

const stringTrim = "      Helloo           "
// console.log(stringTrim); //   Helloo  
// console.log(stringTrim.trim()); //Helloo 

const url = "https://google.com/google%20help"
// console.log(url.replace('%20','-')); // https://google.com/google-help 
// console.log(url.includes('com')); // true
// console.log(url.includes('what')); //false

console.log(gameName.split('-')); // [ 'hellllooo', 'hi', 'com' ]
