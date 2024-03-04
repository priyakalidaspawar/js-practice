//Immediately Invoked Function Expressions (IIFE )  is a function that runs the moment it is invoked or called in the JavaScript event loop.IIFEs prevent pollution of the global JS scope. In a traditional function, if you create a variable within the function, it is accessible in the global object. If you define a variable in an IIFE, it is accessible only directly within the function

function hello(){
    console.log("Hi, How are you?");
}
hello(); // Hi, How are you? ..... here if semicolon is not present then it will give error fro iife function

(function hello(){ 
    // named iife
    console.log("Hi, How are you?");
})(); // Hi, How are you?

//()() 1st () -> represnts function defination and 2nd () -> represnts function execution

///iife as arrow function

(() => {
    // simple/unnamed iife
    console.log("HI");
})();// HI

// unnamed iife and parameter passing
((name) => {
  
    console.log(`Hii ${name}`); //use single tick i.e ``
})("sam") // Hii sam
