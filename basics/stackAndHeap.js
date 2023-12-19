//Primitives are pass by value means only a copy of the value is given not the original reference in memory

let str = "Vikas"
let str1 = str
console.log(str1)//Output => Vikas

str1 = "Suraj"

console.log(str)//Output => Vikas
console.log(str1)//Output => Suraj

//Non Primitives are call by value that is the original reference in the memory is given

let myObj = {
    name: "Vikas",
    age: 22
}

let obj = myObj

obj.name = "Suraj"

console.log(obj.name)//Output => Suraj
console.log(myObj.name)//Output => Suraj
