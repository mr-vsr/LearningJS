//In this file we will be looking into javascript functions

//The values in the function definition are known as parameters whereas the one in function call is known as arguments

const myFunc = function (num1, num2) {
    console.log(num1 + num2)
}

function fun() {
    console.log("Hello World!")
}

// myFunc(1, 1)


//Taking a default value for a parameter
const func = function (name = "vsr") {
    console.log(`Hello ${name} How are you`)
}

// func()//Take up the default value for name field as no argument is passed
// func("vikas")//As we have passed an argument the name field will be overwritten


//Using rest operator using which we can have unknown number of parameters
function addCartValue(...price1) {
    return price1
}

//This rest operator will give us an array with that name and we can perform whatever operations we want on that array object
//The size of the array will depend upon the number of arguments passed
// console.log(addCartValue(1, 2, 3, 4, 5, 6))


let user = {
    fullname: "vikas",
    username: "mrvsr",
    age: 22,
    email: "vikasraivsr@google.com",
    isLogged: true,
    birthdate: "03/02/2002"
}

function handlingObject(user) {
    console.log(`Hello ${user.fullname} your username is ${user.username}`)
}

//passing object as argument

// handlingObject(user)
// handlingObject({
//     fullname: "Vikas",
//     username: "vsr"
// })


function handlingArray(newArr) {
    return newArr[1]
}

let arr = [1, 2, 3, 4]


//Passing array as an argument

console.log(handlingArray(arr))
console.log(handlingArray([1, true, false]))
