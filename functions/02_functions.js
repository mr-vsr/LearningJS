if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)//Output => a is not defined (error) because the let follows global and block scope
// console.log(b)//Output => b is not defined (error) because const follows global and block scope
// console.log(c)//Output => 30  var has a scope throughout the document irrespective of where it has been declared

// any variable declared inside { } have block scope that is they are not accessible outside the brackets
//anything declared in the body of the document has globla scope that is they can be refferred anywhere in the whole document


function fun() {
    const username = "vsr"
    function func() {
        const website = "youtube"
        console.log(username)//This can be accessed here as the variable is of the parent function and child functions have access to all the members of the parent
    }

    // console.log(website)//This cannot be accessed here because it is declared in the child function
    func()
}
// fun()

one(100)

function one(num) {
    console.log(num)
}

//The above function call will work and give the desired output because in java script whenever a function call is made the complete document is searched if that fucntion definiton exists or not and if yes than it is executed


two(100)

const two = function (num) {
    console.log(num)
}

//This will give error that access before initialization because we are storing a function in a variable therfore we can  use a variable before declaration