// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// for (const key in map) {
//     console.log(key)
// }//No output as  map is not iterable like objects


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//for in loop in case of objects will give keys
// for (const key in myObject) {
//     console.log(key)
// }

//This wont work in case of objects
// for (const [key, value] in myObject) {
//     console.log(value)
// }
//Instead we use this
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}



// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }


//For in loop in case of array will return the index postions of the array
// const myArr = [11, 12, 13, 14]
// for (const index in myArr) {
//     console.log(index)
// }



// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }