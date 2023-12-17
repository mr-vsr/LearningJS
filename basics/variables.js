// Getting to know about let, var, const

const accountId = 114 //cann't be changed
let accountEmail = "vikasraivsr@gmail.com" //This can be changed
var accountPassword = "123456" //var is generally not used due to issues in block scope 
accountCity = "Gorakhpur" // This can be done but shouldn't be used

// accountId = 2  //  This will give us runtime error as is an invalid operation

/*
Prefer not to use var because of its issue in block scope and functional scope */

accountEmail = "vikasraivsr"
accountPassword = "1234"
accountCity = "Mysuru"

// console.log(accountId)

console.table([accountEmail, accountId, accountCity]) //This Table method will print all the variables in tabular form along with their index values by treating it as an array.

let accountState //If we don't assign any values to the variables js persume it to be undefined

console.log(accountState)