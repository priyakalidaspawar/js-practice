const user = {
    username: "max",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}
/* o/p console.log(this)->
max , welcome to website
{
  username: 'max',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
sam , welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
} */
user.welcomeMessage() //max , welcome to website
user.username = "sam"
user.welcomeMessage() // sam , welcome to website

// console.log(this); // {}

// function hello(){
//     // console.log(this);
//     name: "rits"
//     console.log(this.name); // undefined
// }
// hello()

// const hello = function (){
//     let username = "sam"
//     console.log(this.username); // undefined
// }
// hello()

// const hello = () => { // Arrow function  () => {}
//     let username = "sam"
//     console.log(this.username); // undefined
// }
// hello()

// const add = (num1, num2) => {
//     return num1 + num2
// }
// console.log(add(2,3)); // 5

// const add = (num1, num2) =>  num1 + num2 // implicit return
// const add = (num1, num2) =>  (num1 + num2)
// const add = (num1, num2) =>  {username: "Sam"} // undefined
const add = (num1, num2) =>  ({username: "Sam"}) // { username: 'Sam' }
console.log(add(2,3)); // 5