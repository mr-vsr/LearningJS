const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
//Also
//  false == 0 => true
//  false ==  "" => true
// 0 == "" => true

//truthy values
// "0", 'false', " ", [], {}, function(){}


//Checking for an empty array
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


//Checking for an empty object
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {//Object.keys( Object) returns the keys in array format
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
//If there is some data coming from a server or database then if we get null / undefined then we can assign it with some function or value instead of that
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10      
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")