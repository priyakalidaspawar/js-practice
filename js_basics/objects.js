// singleton .. object created from constructor
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Priya",
    "full name": "Priya Pawar",
    [mySym]: "mykey1", // syntax for declaring symbol if we just write mySym: "mykey1" -> then type will be string so always declare symbol ->[mySym]
    age: 18,
    location: "Pune",
    email: "hello@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // hello@google.com
// console.log(JsUser["email"]) // hello@google.com
// console.log(JsUser["full name"]) // Priya Pawar
// console.log(JsUser[mySym]) // mykey1


JsUser.email = "hello@chatgpt.com"
// Object.freeze(JsUser) /// to lock the value so that no one can change that value
JsUser.email = "hello@microsoft.com"
// console.log(JsUser);
 /* {
    name: 'Priya',
    'full name': 'Priya Pawar',
    age: 18,
    location: 'Pune',
    email: 'hello@chatgpt.com',
    isLoggedIn: false,
    lastLoginDays: [ 'Monday', 'Saturday' ],
    [Symbol(key1)]: 'mykey1'

    *****OUTPUT***
    if Object.freeze(JsUser) commented then o/p will be
    {
  name: 'Priya',
  'full name': 'Priya Pawar',
  age: 18,
  location: 'Pune',
  email: 'hello@microsoft.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}
  } */

JsUser.greeting = function(){
    // console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    // console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting); // [Function (anonymous)]
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
/*Hello JS user
undefined
Hello JS user, Priya
undefined */