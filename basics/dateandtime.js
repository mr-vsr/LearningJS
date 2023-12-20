//In this file we have discussed about date and time object available in javascript in detail



//Date

let date = new Date()

// console.log(date)
// console.log(typeof date)//Output => object
// console.log(date.toString())//Output will be date in correct format and the time in IST
// console.log(date.toDateString())//Output will be current date
// console.log(date.toLocaleTimeString())//Output will be time

//Declaring custom date

// let myDate = new Date(2024, 0, 31)//Can be used to declare a custom date (months start from zero)
let myDate = new Date("2024-01-23")//We can also declare date like this also
// console.log(myDate.toLocaleDateString())


// console.log(date.getDay())//Output=> 2 corresponding to second day of the week 
// console.log(date.getFullYear())//Year
// console.log(date.getMonth())//Month from 0 to 11

console.log(Date.now())//Will give time in milliseconds from 1 Januray 1970




