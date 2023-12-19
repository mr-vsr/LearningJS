"use strict";  //This means that treat js code file as written in the newer version of the js

/*
JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them 
*/

/*Types of Primitive data types: => all primitive data types are call by value. These values are stored in stack memory.
1. Number => This  means Integers and Decimal values combined
2. bigInt => If we exceed the range of numbers then this is used
3. String => used to store alphanumeric characters "" anything inside single or double quotes is considered to be a string
4. boolean => true/false
5. null => It is a stand alone value and signifies emptyness (null is  an object)
6. undefined => means that we haven't defined the datatype yet
7. symbol => will be used in react etc when we require uniqueness
 */

/* Non Primitive data types: => non primitive data types or referenced type are one which are call  by reference.
These values are stored in head memory.
1. Objects
2. Arrays
3. Functions
*/

// To know the data type of a variable or a value we use typeof
console.log(typeof 14)//number

let a = "hello"
console.log(typeof a)//string

console.log(typeof null) //object
console.log(typeof undefined)//undefined
console.log(typeof true)//boolean


let id = Symbol('123')
let anotherId = Symbol('123')

console.log(id === anotherId)// Output => false


const myFunc = function () {
    console.log("Hello World")
}

let arr = ["Iron-Man", "Captain America", "Thor"]

console.log(typeof myFunc)//Output => function (known as object function)
console.log(typeof arr)//Output => object
