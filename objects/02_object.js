//Objects (singelton)

let obj = new Object()

obj.id = 114
obj.userId = 25
obj.email = "vikasraivsr@gmail.com"
obj.isLoggedIn = true

// console.log(obj)


let ob1 = { 1: "a", 2: "b", 3: "c" }
let ob2 = { 4: "d", 5: "e", 6: "f" }

// let ob3 = { ob1, ob2 }//This will make both objects part of another object

// let ob3 = Object.assign({}, ob1, ob2)//Merging two or more objects together
//Note => if we don't use {} then all the merged objects will be copied in the first parameter object itself also

// let ob3 = Object.assign(ob1, ob2)
// console.log(ob1)

// let ob3 = { ...ob1, ...ob2 }//Spreading objects
// console.log(ob3)

// console.log(Object.keys(obj))//Returns the array of keys
// console.log(Object.values(obj))//Returns the array of values
// console.log(obj.hasOwnProperty('name'))//Output => false because inside obj object there is no key value pair corresponding for name

let user = {
    fullname: {
        firstname: "vikas",
        lastname: "rai",
        username: {
            char: "mr_vsr",
            id: 1021
        }
    },
    age: 22,
    email: "vikasraivsr@google.com",
    isLogged: true,
    birthdate: "03/02/2002"
}


console.log(user.fullname?.username?.char)//Here the question mark basically acts as  a conditional statement that is if that property exists then go ahead otherwise it won't do anything

