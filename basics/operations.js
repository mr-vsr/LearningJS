// let value = 3
// let negValue = -value
// console.log(negValue)//Output => -3

console.log(2 + 2)//Output => 4
console.log(2 - 2)//Output => 0
console.log(2 * 2)//Output => 4
console.log(2 ** 2)//Output => 4
console.log(2 / 2)//Output => 1
console.log(2 % 2)//Output => 0
console.log(2 + "2")//Output => 22   =>Here we get concatenation operation as one of the values is string and the basic operation done with + operator on a string is concate 
console.log(2 * " 2")//Output => 4  => Here we get multiplication because the most common operation done with * operator is multiplication therefore the string value is treated as number
console.log(2 * " h")//Output => NaN => Here type of expression is number but the value is NaN



console.log(2 + 2 + "1")//Output => 41  => Here we get this output because the compiler performs the operation from left to right therefore has no idea that a string is present. Thus is performs summation and as soon as it get's the string value it concates result.
console.log("1" + 2 + 2)//Output => 122 => Here the string value is at first place itslef so string concatenation takes place. 