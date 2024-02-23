//*******************DATE******************/

let myDate = new Date()
console.log(myDate); // 2024-02-23T09:39:19.041Z
console.log(myDate.toString()); // Fri Feb 23 2024 09:40:59 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Fri Feb 23 2024
console.log(myDate.toISOString()); // 2024-02-23T09:44:12.770Z
console.log(myDate.toJSON()); // 2024-02-23T09:44:12.770Z
console.log(myDate.toLocaleDateString()); // 2/23/2024
console.log(myDate.toLocaleString()); // 2/23/2024, 9:44:12 AM
console.log(myDate.toLocaleTimeString()); // 9:44:12 AM
console.log(myDate.toTimeString()); // 09:44:12 GMT+0000 (Coordinated Universal Time)

console.log(typeof myDate); // object

let newDate = new Date(2023,0,4) // 0->jan, 1->feb, 2->march .....
console.log(newDate.toDateString()); // Wed Jan 04 2023 

let todayDate = new Date(2024,1,24,5,3) // 2/24/2024, 5:03:00 AM   Date(2024,1,24,23,3)=>2/24/2024, 11:03:00 PM
console.log(todayDate.toLocaleString());