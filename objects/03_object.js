//Here we'll be learning about object destructuring in javascript

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

const { age } = user //This is known as object destructuring where we can assign variable name to keys of the objects and use them directly
console.log(age)