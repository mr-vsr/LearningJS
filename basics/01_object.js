//Here we have discussed in detail about javascript objects (non-singelton/object literal)


const mySym = Symbol("key")

let obj = {
    name: "Vikas",
    age: 22,
    email: "vikasraivsr81@gmail.com",
    [mySym]: "key1",
    contactInfo: 1234567890,
    "fullname": "Vikas Rai"
}

// console.log(obj)
// console.log(obj.name)
// console.log(obj["fullname"])//If the key is already predefined in string format therefore it has to be accessed in the same way
// console.log(obj["age"])//This is also one way how we can refere object key values
// console.log(obj[mySym])//This is how we refer to the symbol type

// obj.email = "vikasraivsr1234@gmail.com"

// Object.freeze(obj)//The object now cannot be changed


//adding functions to our object

// obj.myFunc = function () {
//     console.log(`Hello ${this.name}! Have a good day`)
// }

// obj.myFunc()
// console.log(obj)