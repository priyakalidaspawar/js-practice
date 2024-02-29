// const bank = new Object() /// -> {}
const bank = {} // {}
// console.log(bank); // {}

bank.id = "123nb"
bank.name = "hello"
bank.isLoggedIn = false

// console.log(bank);// { id: '123nb', name: 'hello', isLoggedIn: false }

const regularUser = {
    email: "hello@google.com",
    User:{
        userFullName:{
            firstName: "Priya",
            lastName: "Pawar"
        }
    }
}

// console.log(regularUser); // { email: 'hello@google.com',User: { userFullName: { firstName: 'Priya', lastName: 'Pawar' } }}
// console.log(regularUser.email); // hello@google.com
// console.log(regularUser.User); // { userFullName: { firstName: 'Priya', lastName: 'Pawar' } }
// console.log(regularUser.User.userFullName); // { firstName: 'Priya', lastName: 'Pawar' }
// console.log(regularUser.User.userFullName.firstName); // Priya

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2}
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' 

const users = [
    {
        id: 1,
        email: "hello@gmail.com"
    },
    {
        id: 1,
        email: "hello@gmail.com"
    },
    {
        id: 1,
        email: "hello@gmail.com"
    },
]

// console.log(users[1].email); // hello@gmail.com

// console.log(bank); // { id: '123nb', name: 'hello', isLoggedIn: false }
// console.log(Object.keys(bank)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(bank));// [ '123nb', 'hello', false ]
// console.log(Object.entries(bank)); // [ [ 'id', '123nb' ], [ 'name', 'hello' ], [ 'isLoggedIn', false ] ]
console.log(bank.hasOwnProperty('id')); // true
console.log(bank.hasOwnProperty('email')); // false
