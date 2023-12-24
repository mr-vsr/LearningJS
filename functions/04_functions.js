// IIFE => Immediately Invoked Function Expression

//It is used in case where there is a chance off polluting the global variables due some operation being performed in the file and we don't want that so we can use IIFE there to immediately invoke the function

// (function definition)()  syntax of IIFE

// This is also an unnamed iife
// (function () {
//     console.log(`DB Connected`)
// })();

//; => Semi colon is required as in the iife functions don't know where to end the scope and it will create a problem in case we have two iife back to back

//This is an example of and named iife
(function chai(name) {
    console.log(`Hello ${name}`)
})("Vikas");


//This is an example of an unnamed iife

((name) => {
    console.log(`Hello ${name}`)
})("Vikas")