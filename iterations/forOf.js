// for Of

// for (const iterator of object) {
    
// }

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);
/*
Map(3) {
    'IN' => 'India',
    'USA' => 'United States of America',
    'Fr' => 'France'
  } */

  for (const [key, value] of map) {
    console.log(key, ':-', value);
  }
/**
IN :- India
USA :- United States of America
Fr :- France */

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value); // TypeError: myObject is not iterable
    
}