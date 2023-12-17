"use strict";  //This means that treat js code file as written in the newer version of the js

/*Types of Primitive data types:
1. Number => This  means Integers and Decimal values combined
2. bigInt => If we exceed the range of numbers then this is used
3. String => used to store alphanumeric characters "" anything inside single or double quotes is considered to be a string
4. boolean => true/false
5. null => It is a stand alone value and signifies emptyness (null is  an object)
6. undefined => means that we haven't defined the datatype yet
7. symbol => will be used in react etc when we require uniqueness
 */

/* Non Primitive data types:
1. Objects
*/

// To know the data type of a variable or a value we use typeof
console.log(typeof 14)//number

let a = "hello"
console.log(typeof a)//string

console.log(typeof null) //object
console.log(typeof undefined)//undefined
console.log(typeof true)//boolean
