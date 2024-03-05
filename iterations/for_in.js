// syntax
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(key);// js cpp rb swift
    console.log(myObject[key]); // javascript C++ ruby swift by apple
    console.log(key, ':-', myObject[key]);
    /* js :- javascript
    cpp :- C++
    rb :- ruby
    swift :- swift by apple */
    console.log(`${key} shortcut is for ${myObject[key]}`);
    /* js shortcut is for javascript
    cpp shortcut is for C++
    rb shortcut is for ruby
    swift shortcut is for swift by apple */
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);// 0 1 2 3 4
    console.log(programming[key]); // js rb py java cpp
    
}