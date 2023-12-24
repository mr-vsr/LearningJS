// const user = {
//     username: "vikas",
//     price: 2500,
//     welcomeMessage: function () {
//         console.log(`Hello ${this.username}, welcome to website`)
//         // console.log(this)//This will give the current context or the current object in which we are right now that is the user object
//     }
// }

// user.welcomeMessage()
// user.username = "suraj"
// user.welcomeMessage()

// console.log(this)//Will give an empty object in node environment and window object in browser



// function chai() {
//     let user = "vikas"
//     // console.log(this)
//     // console.log(this.user)//This will return undefined as this is available only inside objects
// }

// chai()//Will return a complete detail of all the things available inside the function


//We will be learning about arrow functions

//Syntax of explicit arrow function
// const chai = (a, b) => {
//     return a + b
// }


// if the function is performing only a single line of statement then we can omit the parenthesis and instead use a bracket and omit the return statement

// const chai = (a, b) => a + b
// const chai = (a, b) => (a + b)
// const user = () => ({ username: "vikas" })
// console.log(user())
